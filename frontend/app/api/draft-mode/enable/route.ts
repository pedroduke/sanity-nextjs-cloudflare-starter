import { client } from '@/sanity/lib/client'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { perspectiveCookieName } from '@sanity/preview-url-secret/constants'
import { cookies, draftMode } from 'next/headers'

const clientWithToken = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
})

function isHttpsRequest(request: Request): boolean {
  const forwardedProto = request.headers.get('x-forwarded-proto')
  if (forwardedProto) return forwardedProto === 'https'
  try {
    return new URL(request.url).protocol === 'https:'
  } catch {
    return false
  }
}

export async function GET(request: Request) {
  const {
    isValid,
    redirectTo = '/',
    studioPreviewPerspective,
  } = await validatePreviewUrl(clientWithToken, request.url)

  if (!isValid) {
    return new Response('Invalid secret', { status: 401 })
  }

  const draftModeStore = await draftMode()
  if (!draftModeStore.isEnabled) draftModeStore.enable()

  const isSecure = process.env.NODE_ENV === 'production' || isHttpsRequest(request)
  const sameSite = isSecure ? 'none' : 'lax'

  const cookieStore = await cookies()

  const prerenderBypass = cookieStore.get('__prerender_bypass')
  if (prerenderBypass?.value) {
    cookieStore.set({
      name: '__prerender_bypass',
      value: prerenderBypass.value,
      httpOnly: true,
      path: '/',
      secure: isSecure,
      sameSite,
    })
  }

  const nextPreviewData = cookieStore.get('__next_preview_data')
  if (nextPreviewData?.value) {
    cookieStore.set({
      name: '__next_preview_data',
      value: nextPreviewData.value,
      httpOnly: true,
      path: '/',
      secure: isSecure,
      sameSite,
    })
  }

  if (studioPreviewPerspective) {
    cookieStore.set({
      name: perspectiveCookieName,
      value: studioPreviewPerspective,
      httpOnly: true,
      path: '/',
      secure: isSecure,
      sameSite,
    })
  }

  return new Response(null, {
    status: 307,
    headers: {
      Location: redirectTo,
    },
  })
}
