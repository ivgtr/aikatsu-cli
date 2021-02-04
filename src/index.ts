import list from './config.json'

export default (ep: string | undefined, opts: { find?: string | undefined }) => {
  console.log(ep, opts.find)
  return list
}
