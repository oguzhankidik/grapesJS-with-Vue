<template>
  <div id="app">
    <grapes-component :htmlCode.sync="htmlCode"/>
  </div>
</template>

<script>

import GrapesComponent from "@/components/grapes-component";

export default {
  name: 'App',
  data() {
    return {
      grapesHtml:'',
      htmlCode:'<table width="100%" height="100%" bgcolor="rgb(234, 236, 237)" id="irrf" class="main-body" style="box-sizing: border-box; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%; height: 100%; background-color: rgb(234, 236, 237);">\n' +
          '  <tbody id="iiie" style="box-sizing: border-box;">\n' +
          '    <tr valign="top" id="ixk6" class="row" style="box-sizing: border-box; vertical-align: top;">\n' +
          '      <td id="iieh" bgcolor="rgba(237,237,237,0.1)" class="main-body-cell" style="text-align: center; color: #ffffff; background-color: rgba(237,237,237,0.1); box-sizing: border-box;" align="center">\n' +
          '        <table width="90%" height="0" id="i2tg" class="container" style="box-sizing: border-box; font-family: Helvetica, serif; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; height: 0px; width: 90%; max-width: 550px;">\n' +
          '          <tbody id="injc6" style="box-sizing: border-box;">\n' +
          '            <tr id="izsag" style="box-sizing: border-box;">\n' +
          '              <td valign="top" id="ifdil" class="container-cell" style="box-sizing: border-box; vertical-align: top; font-size: medium; padding-bottom: 50px;">\n' +
          '                <table width="100%" id="iauy3" class="c1766" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: 0px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%; min-height: 30px;">\n' +
          '                  <tbody id="iadgg" style="box-sizing: border-box;">\n' +
          '                    <tr id="i3q2f" style="box-sizing: border-box;">\n' +
          '                      <td width="11%" id="ikjuq" align="center" class="cell c1769" style="text-align: center; box-sizing: border-box; width: 11%;">\n' +
          '                        <img src="https://i.imgur.com/o1U7zaZ.png" alt="GrapesJS." id="i3gwk" height="166" class="c926" style="box-sizing: border-box; color: rgb(158, 83, 129); width: 32.04%; font-size: 50px; height: 166px; margin: 0 0 0 0; text-align: center;">\n' +
          '                      </td>\n' +
          '                    </tr>\n' +
          '                  </tbody>\n' +
          '                </table>\n' +
          '                <table height="0" id="i9k52" class="card" style="box-sizing: border-box; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; margin-bottom: 20px; height: 0px; margin: 0 0 0 0;">\n' +
          '                  <tbody id="i3szh" style="box-sizing: border-box;">\n' +
          '                    <tr id="i0ehb" style="box-sizing: border-box;">\n' +
          '                      <td bgcolor="rgb(255, 255, 255)" align="center" id="ifo5l" class="card-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); overflow-x: hidden; overflow-y: hidden; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; text-align: center;">\n' +
          '                        <table width="100%" height="0" id="i06rg" class="table100 c1357" style="box-sizing: border-box; width: 100%; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; border-collapse: collapse;">\n' +
          '                          <tbody id="i2q1x" style="box-sizing: border-box;">\n' +
          '                            <tr id="iuh7i" style="box-sizing: border-box;">\n' +
          '                              <td valign="top" id="i7n29" class="card-content" style="box-sizing: border-box; font-size: 13px; line-height: 20px; color: rgb(111, 119, 125); padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px; vertical-align: top;">\n' +
          '                                <div id="i0x4d" style="box-sizing: border-box; padding: 5px; min-height: 10px; color: #000000; font-size: 23px; font-weight: 700; text-align: center; font-family: Verdana, Geneva, sans-serif;">Hello [[name]]\n' +
          '                                </div>\n' +
          '                                <div id="iugwg" style="box-sizing: border-box; padding: 5px; min-height: 10px; font-size: 14px; color: #000000; font-family: Verdana, Geneva, sans-serif;">Thank you for visiting IPERA Solutions.Please take a quick survey to let us know how did we do today.\n' +
          '                                </div>\n' +
          '                                <table width="100%" id="i5oag" class="c1542" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%;">\n' +
          '                                  <tbody id="it45l" style="box-sizing: border-box;">\n' +
          '                                    <tr id="i12s6" style="box-sizing: border-box;">\n' +
          '                                      <td id="c1545" align="center" class="card-footer" style="box-sizing: border-box; padding-top: 20px; padding-right: 0px; padding-bottom: 20px; padding-left: 0px; text-align: center;">\n' +
          '                                        <a href="https://github.com/artf/grapesjs" id="i0jmq" class="button" style="box-sizing: border-box; font-size: 12px; padding-top: 10px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px; background-color: #3a3939; color: rgb(255, 255, 255); text-align: center; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; font-weight: 300; text-decoration: none;">TAKE SURVEY<br id="infca" style="box-sizing: border-box;"></a>\n' +
          '                                      </td>\n' +
          '                                    </tr>\n' +
          '                                  </tbody>\n' +
          '                                </table>\n' +
          '                              </td>\n' +
          '                            </tr>\n' +
          '                          </tbody>\n' +
          '                        </table>\n' +
          '                      </td>\n' +
          '                    </tr>\n' +
          '                  </tbody>\n' +
          '                </table>\n' +
          '                <table width="100%" id="i8wwl" class="list-item" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">\n' +
          '                  <tbody id="irbks" style="box-sizing: border-box;">\n' +
          '                    <tr id="iofqn" style="box-sizing: border-box;">\n' +
          '                      <td bgcolor="rgb(255, 255, 255)" id="isquq" class="list-item-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">\n' +
          '                        <table width="100%" height="150" id="idqe6" class="list-item-content" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">\n' +
          '                          <tbody id="il5qj" style="box-sizing: border-box;">\n' +
          '                            <tr id="ir8mr" class="list-item-row" style="box-sizing: border-box;">\n' +
          '                              <td width="30%" id="i82by" align="center" class="list-cell-left" style="text-align: center; box-sizing: border-box; width: 30%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">\n' +
          '                                <img src="https://i.imgur.com/ZB2WTNU.png" alt="Image1" id="inlrm" height="192" class="list-item-image" style="box-sizing: border-box; color: rgb(217, 131, 166); font-size: 45px; width: 99.61%; height: 192px;">\n' +
          '                              </td>\n' +
          '                            </tr>\n' +
          '                          </tbody>\n' +
          '                        </table>\n' +
          '                      </td>\n' +
          '                    </tr>\n' +
          '                  </tbody>\n' +
          '                </table>\n' +
          '                <div id="i3af95" style="box-sizing: border-box; padding: 5px; min-height: 10px; text-align: center; color: #3d3d3d; font-size: 17px;">Download our app from\n' +
          '                </div>\n' +
          '                <div id="i6rbau" style="box-sizing: border-box; padding: 10px; text-align: center; color: #3f3d3d; font-style: normal; font-family: Verdana, Geneva, sans-serif;">\n' +
          '                </div>\n' +
          '                <table width="100%" id="i1dfl" class="list-item" style="box-sizing: border-box; height: auto; width: 100%; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;">\n' +
          '                  <tbody id="iibxk" style="box-sizing: border-box;">\n' +
          '                    <tr id="ioja1" style="box-sizing: border-box;">\n' +
          '                      <td bgcolor="rgb(255, 255, 255)" id="i8zfj" class="list-item-cell" style="box-sizing: border-box; background-color: rgb(255, 255, 255); border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; overflow-x: hidden; overflow-y: hidden; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">\n' +
          '                        <table width="100%" height="150" id="i47ku" class="list-item-content" style="box-sizing: border-box; border-collapse: collapse; margin-top: 0px; margin-right: auto; margin-bottom: 0px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; height: 150px; width: 100%;">\n' +
          '                          <tbody id="id3xd" style="box-sizing: border-box;">\n' +
          '                            <tr id="i1daf" class="list-item-row" style="box-sizing: border-box;">\n' +
          '                              <td width="30%" id="iwg5p" align="center" class="list-cell-left" style="text-align: center; box-sizing: border-box; width: 30%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">\n' +
          '                                <img src="https://i.imgur.com/F9dLLUH.png" alt="Image2" id="i4lne" height="104" class="list-item-image" style="box-sizing: border-box; color: rgb(217, 131, 166); font-size: 45px; width: 62.72%; height: 104px; text-align: center;">\n' +
          '                                <table id="ihj8rg" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">\n' +
          '                                  <tbody id="ieloj" style="box-sizing: border-box;">\n' +
          '                                    <tr id="imxh4" style="box-sizing: border-box;">\n' +
          '                                      <td id="i5xl9q" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; text-align: center;">\n' +
          '                                        <img src="https://i.imgur.com/A4uuhsE.png" id="ipojyp" width="345" height="132" style="box-sizing: border-box; color: black; width: 345px; height: 132px;">\n' +
          '                                      </td>\n' +
          '                                    </tr>\n' +
          '                                  </tbody>\n' +
          '                                </table>\n' +
          '                                <table id="i0tyx" width="100%" height="150" align="center" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%; text-align: center;">\n' +
          '                                  <tbody id="ia0hg" style="box-sizing: border-box;">\n' +
          '                                    <tr id="iqq62" style="box-sizing: border-box;">\n' +
          '                                      <td id="ityef" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">\n' +
          '                                        <table id="infih" width="100%" height="150" align="center" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%; text-align: center;">\n' +
          '                                          <tbody id="is7zt" style="box-sizing: border-box;">\n' +
          '                                            <tr id="itv2q" style="box-sizing: border-box;">\n' +
          '                                              <td id="i78fz" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">\n' +
          '                                                <img id="iy7k9" src="https://i.imgur.com/o1U7zaZ.png" width="161" height="161" style="box-sizing: border-box; color: black; width: 161px; height: 161px;">\n' +
          '                                                <table id="im2hts" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                                  <tbody id="iqsv7" style="box-sizing: border-box;">\n' +
          '                                                    <tr id="iqqp9" style="box-sizing: border-box;">\n' +
          '                                                      <td height="1" bgcolor="rgba(237,237,237,0.1)" id="i0buc" class="divider" style="box-sizing: border-box; background-color: rgba(237,237,237,0.1); height: 1px; border-collapse: collapse;">\n' +
          '                                                      </td>\n' +
          '                                                    </tr>\n' +
          '                                                  </tbody>\n' +
          '                                                </table>\n' +
          '                                                <blockquote id="iyses" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                                </blockquote>\n' +
          '                                              </td>\n' +
          '                                              <td id="iofum" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">\n' +
          '                                                <img id="iuu9a9" src="https://i.imgur.com/o1U7zaZ.png" width="161" height="161" style="box-sizing: border-box; color: black; width: 161px; height: 161px;">\n' +
          '                                                <table id="if6xpk" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                                  <tbody id="iap79" style="box-sizing: border-box;">\n' +
          '                                                    <tr id="igmfm" style="box-sizing: border-box;">\n' +
          '                                                      <td height="1" bgcolor="rgba(237,237,237,0.1)" id="iange" class="divider" style="box-sizing: border-box; background-color: rgba(237,237,237,0.1); height: 1px; border-collapse: collapse;">\n' +
          '                                                      </td>\n' +
          '                                                    </tr>\n' +
          '                                                  </tbody>\n' +
          '                                                </table>\n' +
          '                                                <blockquote id="i2b0q" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                                </blockquote>\n' +
          '                                              </td>\n' +
          '                                            </tr>\n' +
          '                                          </tbody>\n' +
          '                                        </table>\n' +
          '                                        <table id="izob6" width="100%" height="150" align="center" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%; text-align: center;">\n' +
          '                                          <tbody id="iyf11" style="box-sizing: border-box;">\n' +
          '                                            <tr id="inohf" style="box-sizing: border-box;">\n' +
          '                                              <td id="irwrs" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">\n' +
          '                                                <img id="ixuxou" src="https://i.imgur.com/o1U7zaZ.png" width="161" height="161" style="box-sizing: border-box; color: black; width: 161px; height: 161px;">\n' +
          '                                                <table id="ibz6fz" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                                  <tbody id="iqyot" style="box-sizing: border-box;">\n' +
          '                                                    <tr id="ijffi" style="box-sizing: border-box;">\n' +
          '                                                      <td height="1" bgcolor="rgba(237,237,237,0.1)" id="ig6zg" class="divider" style="box-sizing: border-box; background-color: rgba(237,237,237,0.1); height: 1px; border-collapse: collapse;">\n' +
          '                                                      </td>\n' +
          '                                                    </tr>\n' +
          '                                                  </tbody>\n' +
          '                                                </table>\n' +
          '                                                <blockquote id="i0z9b" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                                </blockquote>\n' +
          '                                              </td>\n' +
          '                                            </tr>\n' +
          '                                          </tbody>\n' +
          '                                        </table>\n' +
          '                                      </td>\n' +
          '                                    </tr>\n' +
          '                                  </tbody>\n' +
          '                                </table>\n' +
          '                              </td>\n' +
          '                            </tr>\n' +
          '                          </tbody>\n' +
          '                        </table>\n' +
          '                      </td>\n' +
          '                    </tr>\n' +
          '                  </tbody>\n' +
          '                </table>\n' +
          '                <table width="100%" id="ie81n" class="grid-item-row" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; width: 100%;">\n' +
          '                  <tbody id="i522m" style="box-sizing: border-box;">\n' +
          '                    <tr id="iolxm" style="box-sizing: border-box;">\n' +
          '                      <td width="50%" valign="top" id="ieiq8" class="grid-item-cell2-r" style="box-sizing: border-box; vertical-align: top; padding-left: 10px; width: 50%;">\n' +
          '                      </td>\n' +
          '                    </tr>\n' +
          '                  </tbody>\n' +
          '                </table>\n' +
          '              </td>\n' +
          '            </tr>\n' +
          '          </tbody>\n' +
          '        </table>\n' +
          '      </td>\n' +
          '    </tr>\n' +
          '  </tbody>\n' +
          '</table>'
    }
  },
  components: {
    GrapesComponent

  },
  watch: {
    htmlCode() {
      console.log(this.htmlCode)
    }
  },
  methods: {
    getGrapesHTML(savedHtml) {
      this.htmlCode = savedHtml
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
</style>
