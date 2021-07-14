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
      grapesHTML: "",
      htmlCode: '<table width="100%" height="100%" bgcolor="rgb(234, 236, 237)" id="irrf" class="main-body" style="box-sizing: border-box; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%; height: 100%; background-color: rgb(234, 236, 237);">\n' +
          '  <tbody id="iiie" style="box-sizing: border-box;">\n' +
          '    <tr valign="top" id="ixk6" class="row" style="box-sizing: border-box; vertical-align: top;">\n' +
          '      <td id="iieh" bgcolor="#ffffff" class="main-body-cell" style="background-color: #ffffff; box-sizing: border-box;">\n' +
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
          '                              <td valign="top" id="i7n29" class="card-content" style="border: 0 solid #000000; box-sizing: border-box; font-size: 13px; line-height: 20px; color: rgb(111, 119, 125); padding-top: 10px; padding-right: 20px; padding-bottom: 0px; padding-left: 20px; vertical-align: top;">\n' +
          '                                <div id="ilhuh" style="box-sizing: border-box; padding: 5px; min-height: 10px; color: #000000; font-size: 24px; font-weight: 700;">\n' +
          '                                  <div id="ill9g" style="box-sizing: border-box; text-align: center;">Hello [[name]]\n' +
          '                                  </div>\n' +
          '                                </div>\n' +
          '                                <div id="iwmlg" style="box-sizing: border-box; padding: 5px; min-height: 10px; color: #000000;">Thank you for visiting IPERA Solutions. Please take a quick survey to let us know how did we do today.\n' +
          '                                </div>\n' +
          '                                <table width="100%" id="i5oag" class="c1542" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%;">\n' +
          '                                  <tbody id="it45l" style="box-sizing: border-box;">\n' +
          '                                    <tr id="i12s6" style="box-sizing: border-box;">\n' +
          '                                      <td id="c1545" align="center" class="card-footer" style="box-sizing: border-box; padding-top: 20px; padding-right: 0px; padding-bottom: 20px; padding-left: 0px; text-align: center;">\n' +
          '                                        <a href="https://github.com/artf/grapesjs" id="i0jmq" class="button" style="box-sizing: border-box; font-size: 12px; padding-top: 10px; padding-right: 20px; padding-bottom: 10px; padding-left: 20px; background-color: #3a3939; color: rgb(255, 255, 255); text-align: center; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; font-weight: 300; text-decoration: none;">TAKE SURVEY<br id="i1t6i" style="box-sizing: border-box;"></a>\n' +
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
          '                <div id="i8skt" style="box-sizing: border-box; padding: 5px; min-height: 10px;">\n' +
          '                  <div id="i92aa" style="box-sizing: border-box; text-align: center;">Download our app from here\n' +
          '                  </div>\n' +
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
          '                                  <tbody id="i099k" style="box-sizing: border-box;">\n' +
          '                                    <tr id="i4gp1" style="box-sizing: border-box;">\n' +
          '                                      <td id="i5xl9q" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; text-align: center;">\n' +
          '                                        <img src="https://i.imgur.com/A4uuhsE.png" id="ipojyp" width="345" height="132" style="box-sizing: border-box; color: black; width: 345px; height: 132px;">\n' +
          '                                      </td>\n' +
          '                                    </tr>\n' +
          '                                  </tbody>\n' +
          '                                </table>\n' +
          '                                <table id="ihnkk" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">\n' +
          '                                  <tbody id="ivpu2" style="box-sizing: border-box;">\n' +
          '                                    <tr id="isu6a" style="box-sizing: border-box;">\n' +
          '                                      <td id="iz8qv" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">\n' +
          '                                      </td>\n' +
          '                                      <td id="i53ec" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; text-align: center;">\n' +
          '                                        <table id="ifwvy" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">\n' +
          '                                          <tbody id="isaig" style="box-sizing: border-box;">\n' +
          '                                            <tr id="icj5f" style="box-sizing: border-box;">\n' +
          '                                              <td id="imclh" width="50%" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%; text-align: center;">\n' +
          '                                                <img id="iv2l4" src="http://placehold.it/350x250/79c267/fff/image3.jpg" width="217" height="155" style="box-sizing: border-box; color: black; width: 217px; height: 155px;">\n' +
          '                                                <table id="i8st4" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                                  <tbody id="isea5" style="box-sizing: border-box;">\n' +
          '                                                    <tr id="iamba" style="box-sizing: border-box;">\n' +
          '                                                      <td height="1" bgcolor="rgba(0, 0, 0, 0.1)" id="iah3h" class="divider" style="box-sizing: border-box; background-color: rgba(0, 0, 0, 0.1); height: 1px;">\n' +
          '                                                      </td>\n' +
          '                                                    </tr>\n' +
          '                                                  </tbody>\n' +
          '                                                </table>\n' +
          '                                                <blockquote id="ii8yf" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                                </blockquote>\n' +
          '                                              </td>\n' +
          '                                              <td id="if0b8" width="50%" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%; text-align: center;">\n' +
          '                                                <img id="i01es" src="http://placehold.it/350x250/79c267/fff/image3.jpg" width="217" height="155" style="box-sizing: border-box; color: black; width: 217px; height: 155px;">\n' +
          '                                                <table id="ifuok" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                                  <tbody id="i6vwo" style="box-sizing: border-box;">\n' +
          '                                                    <tr id="i3t9b" style="box-sizing: border-box;">\n' +
          '                                                      <td height="1" bgcolor="rgba(0, 0, 0, 0.1)" id="iqvo9" class="divider" style="box-sizing: border-box; background-color: rgba(0, 0, 0, 0.1); height: 1px;">\n' +
          '                                                      </td>\n' +
          '                                                    </tr>\n' +
          '                                                  </tbody>\n' +
          '                                                </table>\n' +
          '                                                <blockquote id="isj4e" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                                </blockquote>\n' +
          '                                              </td>\n' +
          '                                            </tr>\n' +
          '                                          </tbody>\n' +
          '                                        </table>\n' +
          '                                        <img id="iir9l" src="http://placehold.it/350x250/79c267/fff/image3.jpg" width="217" height="155" style="box-sizing: border-box; color: black; width: 217px; height: 155px;">\n' +
          '                                        <table id="il6le" width="100%" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px;">\n' +
          '                                          <tbody id="i4t9j" style="box-sizing: border-box;">\n' +
          '                                            <tr id="imd7l" style="box-sizing: border-box;">\n' +
          '                                              <td height="1" bgcolor="rgba(0, 0, 0, 0.1)" id="ihtnp" class="divider" style="box-sizing: border-box; background-color: rgba(0, 0, 0, 0.1); height: 1px;">\n' +
          '                                              </td>\n' +
          '                                            </tr>\n' +
          '                                          </tbody>\n' +
          '                                        </table>\n' +
          '                                        <blockquote id="i9qe5" class="quote" style="box-sizing: border-box;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n' +
          '                                        </blockquote>\n' +
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
