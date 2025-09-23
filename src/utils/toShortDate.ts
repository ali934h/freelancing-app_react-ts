export default function toShortDate(date) {
  return new Date(date).toLocaleDateString("en-CA").replaceAll("-", "/");
}
