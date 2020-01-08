export function makeRequest(url: string): Promise<{}> {
  return fetch(url).then((data) => data.json());
}
