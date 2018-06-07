const channels = require('../common/constants/channel')
function wrapper(channelName) {
  channelName = channelName || channels[0].name
  const channel = channels.find(r => r.name == channelName)
  if (!channel) {
    throw Error(`Can not find ${channelName}, 
    available channels: [${channels.map(r => r.name).join(', ')}]
    Please confirm you have the corrent channel name`)
  }

  const impls = require(`./${channelName}`)

  function parse(url) {
    return impls.parse(url, channel)
  }

  function latest() {
    return impls.latest(channel.home_url, channel)
  }

  function search() {
    return impls.search(channel.search_url, channel)
  }

  return {
    parse,
    latest,
    search
  }
}

module.exports = wrapper