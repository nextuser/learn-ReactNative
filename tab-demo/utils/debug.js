export default function debug(...args) {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG === 'true') {
    console.log(...args)
  }
}