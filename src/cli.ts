#!/usr/bin/env node

import meow from "meow";
import symphogear from "symphogear-g";
import type { Package } from "update-notifier";
import updateNotifier from "update-notifier";
import { aikatsu } from "./index.js";

const cli = () => {
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
  http://odayaka.work/152%E3%82%A2%E3%82%A4%E3%82%AB%E3%83%84%EF%BC%81%E3%81%AF%E3%81%A4%E3%81%A5%E3%81%8F%EF%BC%81%EF%BC%81.mp3
`,
    {
      importMeta: import.meta,
      flags: {
        title: {
          type: "boolean",
          alias: "t",
        },
        link: {
          type: "boolean",
          alias: "l",
        },
      },
    }
  );

  updateNotifier({ pkg: cli.pkg as Package }).notify();

  const { input, flags } = cli;
  if (flags?.v) {
    cli.showVersion();
    return;
  }
  if (flags?.h) {
    cli.showHelp();
    return;
  }

  aikatsu(input[0])
    .then((kakugen) => {
      if (flags?.title) {
        console.log(`\u001b[35m${kakugen.id}\u001b[0m ${kakugen.title}`);
      }
      if (flags?.link) {
        console.log(kakugen.link);
      }
      symphogear(kakugen.link).catch((err) => {
        console.log(err.message);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

cli();
