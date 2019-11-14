export default function loggerConsoleLogs(value) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(value);
  }
}
