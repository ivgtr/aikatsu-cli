#!/usr/bin/env node

import meow from 'meow'
import updateNotifier from 'update-notifier'
import type { Package } from 'update-notifier'
import symphogear from 'symphogear-g'
import Aikatsu from './index'

export default (async () => {
  const cli = meow(
    `
Usage
  $ aikatsu [query]

Examples
  $ aikatsu

  $ aikatsu 100

  $ aikatsu 一体感 --title
  30 ライブは一体感！

  $ aikatsu --link
  http://sanabutton.ojaru.jp/.%2Fsound%2F%E7%9C%8B%E8%AD%B7%E3%81%AE%E6%97%A5%E2%80%A6%E3%81%A8%E3%81%AF%E8%A8%80%E3%81%A3%E3%81%9F%E3%82%82%E3%81%AE%E3%81%AE%2F%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%83%95%E3%82%A3%E3%82%AE%E3%83%A5%E3%82%A203.mp3
`,
    {
      flags: {
        title: {
          type: 'boolean',
          alias: 't'
        },
        link: {
          type: 'boolean',
          alias: 'l'
        }
      }
    }
  )

  updateNotifier({ pkg: cli.pkg as Package }).notify()

  const { input, flags } = cli
  await Aikatsu(input[0])
    .then((kakugen) => {
      if (flags.title) {
        console.log(`\u001b[35m${kakugen.id}\u001b[0m ${kakugen.title}`)
      }
      if (flags.link) {
        console.log(kakugen.link)
      }
      symphogear(kakugen.link)
    })
    .catch((err) => {
      console.log(err.message)
    })
})()
