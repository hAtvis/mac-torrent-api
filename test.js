// var fs = require('fs')
// var cheerio = require('cheerio')
// const html =  fs.readFileSync('input.html', 'utf-8')

// const $ = cheerio.load(html)

// // $(".st-main .kanren dl").each(function() {
// //   const cat = $(this).find('dd .blog_info a').first().text()
// //   console.log(cat)
// // })

// $(".entry-content").children(":gt(3)").each(function(){
//   console.log(this)
// })

const html = '<p>CleanMyMac为您喜爱的东西腾出空间。体验一系列巧妙的新功能，CleanMyMac可让您安全智能地扫描和清理整个系统，删除大量未使用的文件，缩小iPhoto图库的大小，卸载不需要的应用程序或修复不正常工作的应用程序，管理所有您可以从一个地方进行扩展，还可以做更多的事情 - 全部来自一个新设计和精美简洁的界面。</p><h5>你的Mac值得拥有自己的清洁天才。</h5><p>CleanMyMac 3显示你要清理什么，你只需要选择什么时候。它会扫描Mac上的所有内容，包括Mac系统，iTunes，Mail，iPhoto，垃圾箱以及一直在暗中避开您的旧文件夹。另外，它确切地知道什么可以安全地清理你的Mac，什么不能。几乎就像它有一个大脑或其他东西。</p><h5>一键清洁。</h5><p>Mac很容易使用。 Mac清洁工也应该如此。 CleanMyMac 3的智能清理依靠一个按钮扫描Mac的每一寸，然后删除它找到的垃圾。而且，它只会选择100％安全删除的文件，因此您不必担心删除错误的文件。这不仅仅是一个自动清洁工具 - 它非常聪明。</p><h5>智能清洁剂是安全清洁剂。</h5><p>我们的首要任务是确保您的Mac安全。我们已经建立了超过6年的安全清理算法。它被称为安全数据库，是CleanMyMac 3在每次扫描Mac时引用的规则，项目和例外的列表。使用CleanMyMac 3，您可以绝对确定您只是清理正确的文件。</p><h5>我们设计了一个系统来清理你的。</h5><p>最后一次在斯瓦希里语中使用您的应用程序的时间是什么时候？那么Tetum呢？这就是我们的想法。而且，不仅仅是浪费系统空间的语言文件。 CleanMyMac 3可以让您摆脱Mac上所有额外的附加功能，而无需担心删除关键文件。</p><h5>修剪照片库的千兆字节 - 不会丢失任何一张照片。</h5><p>这不是你的照片浪费空间，而是你iPhoto图库中的隐藏拷贝。您会发现，无论您何时编辑或旋转照片，iPhoto都会创建原件的副本并将其隐藏起来以保持安全。这意味着千兆字节的无用拷贝。 CleanMyMac 3清除所有这些，而不会损害您的任何照片。</p><h5>邮件比看起来重得多。</h5><p>您在Mail中收到的每个附件（从PDF到签名）都会保存到Mac中。知道这是什么？很多。另外，如果你想手动清除那些GB的附件，你必须爬过你的整个邮箱搜索每一个回形针。节省您的麻烦 -  CleanMyMac 3很乐意为您提供帮助。</p><h5>iTunes中不仅仅包含曲调。</h5><p>iTunes存储千兆字节以外的文件，包括过时的设备备份，旧的软件更新，破损的下载等等。但使用CleanMyMac 3很容易清理。只需快速扫描一次iTunes，即可立即获得更多音乐空间。</p><h5>将旧文件带出深处。</h5><p>使用CleanMyMac 3发现您在硬盘上忘记的所有旧文件。它会扫描文件夹和磁盘驱动器，以显示长时间未打开的文件。为什么挂在你从未使用过的东西上？让CleanMyMac 3将它们聚集在一起，然后决定值得保留的内容。</p><h5>大多数家庭都有一个以上的垃圾桶。</h5><p>Mac也是如此，CleanMyMac 3只需点击一下即可清空所有这些内容。它会查找所有垃圾箱：外部驱动器垃圾箱，iPhoto垃圾箱，邮件垃圾箱以及其他特定应用程序垃圾箱 - 然后全部清空。所以今晚，轮到你去拿垃圾了。但幸运的是，只需点击一下即可。</p><p>兼容性：OS X 10.8或更高版本64位</p><p>网站：https://macpaw.com/cleanmymac</p><h3>CleanMyMac 3.9.6的新功能</h3><ul>改进我们的隐私政策已更新，完全符合GDPR要求。修正了小错误和已知的崩溃情况。</ul>'
var TurndownService = require('turndown')

var turndownService = new TurndownService()
var markdown = turndownService.turndown(html)
console.log(markdown)
