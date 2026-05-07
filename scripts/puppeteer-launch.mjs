import {existsSync} from 'node:fs';
import puppeteer from 'puppeteer';

const fallbackExecutables = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
];

const resolveExecutablePath = () => {
  try {
    const bundled = puppeteer.executablePath();
    if (bundled && existsSync(bundled)) {
      return bundled;
    }
  } catch {}

  return fallbackExecutables.find((path) => existsSync(path));
};

export const launchBrowser = async () =>
  puppeteer.launch({
    headless: true,
    executablePath: resolveExecutablePath(),
    timeout: 120000,
  });
