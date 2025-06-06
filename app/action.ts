'use server';

import { sleep } from 'radash';

export default async function getTestingData() {
  await sleep(5000);
  console.log('Now server action can accept your request.');
}
