import { QurageLinkFactory } from "@uniqys/qurage-link-lib"

export default function (_, inject) {
  const qurageLink = QurageLinkFactory.create({ endpoint: 'https://endpoint.example.com:54321' })
  inject('qurageLink', qurageLink)
}
