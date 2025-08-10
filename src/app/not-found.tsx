export default function NotFound() {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="p1">404</p>
        <h1>
          Page not found
        </h1>
        <p className="p1">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a className="button" href="/">Go back home</a>
        </div>
      </div>
    </div>
  )
}
