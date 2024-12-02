(()=>{"use strict";const C=window.React,e=window.wp.components,{__:t}=wp.i18n,{ToggleControl:l,BaseHelp:a}=JetFBComponents,{useCaptchaProvider:V}=JetFBHooks,{useEffect:H}=wp.element,{globalTab:i}=JetFBActions,c=i({slug:"captcha-tab",element:"hcaptcha",empty:{}}),n=function(){const[i,n]=V(),r=i.use_global?c:i;return H((()=>{n({key:r.key,secret:r.secret,threshold:r.threshold})}),[i.use_global]),(0,C.createElement)(C.Fragment,null,(0,C.createElement)(l,{checked:i.use_global,onChange:C=>n({use_global:C})},t("Use","jet-form-builder")+" ",(0,C.createElement)("a",{href:JetFormEditorData.global_settings_url+"#captcha-tab__hcaptcha"},t("Global Settings","jet-form-builder"))),(0,C.createElement)(e.TextControl,{label:t("Site Key:","jet-form-builder"),value:r.key,disabled:i.use_global,onChange:C=>n({key:C})}),(0,C.createElement)(a,null,t("You can find it on this page in the first column of Sitekey.","jet-form-builder")+" ",(0,C.createElement)(e.ExternalLink,{href:"https://dashboard.hcaptcha.com/sites"},t("Go to the dashboard of sites","jet-form-builder"))),(0,C.createElement)(e.TextControl,{label:t("Secret Key:","jet-form-builder"),value:r.secret,disabled:i.use_global,onChange:C=>n({secret:C})}),(0,C.createElement)(a,null,t("You can find it on the settings page, this will be the first field.","jet-form-builder")," ",(0,C.createElement)(e.ExternalLink,{href:"https://dashboard.hcaptcha.com/settings"},t("Go to the Settings page","jet-form-builder"))))},r=(0,C.createElement)("svg",{width:"268",height:"100",viewBox:"0 0 268 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,C.createElement)("rect",{width:"268",height:"100",rx:"4",fill:"white"}),(0,C.createElement)("path",{d:"M27 56.95L20.05 50L17.6833 52.35L27 61.6666L47 41.6667L44.65 39.3167L27 56.95Z",fill:"#0DC167"}),(0,C.createElement)("path",{d:"M62.9375 43.625V55H61.4297V43.625H62.9375ZM74.4141 53.5547V49.2031C74.4141 48.8698 74.3464 48.5807 74.2109 48.3359C74.0807 48.0859 73.8828 47.8932 73.6172 47.7578C73.3516 47.6224 73.0234 47.5547 72.6328 47.5547C72.2682 47.5547 71.9479 47.6172 71.6719 47.7422C71.401 47.8672 71.1875 48.0312 71.0312 48.2344C70.8802 48.4375 70.8047 48.6562 70.8047 48.8906H69.3594C69.3594 48.5885 69.4375 48.2891 69.5938 47.9922C69.75 47.6953 69.974 47.4271 70.2656 47.1875C70.5625 46.9427 70.9167 46.75 71.3281 46.6094C71.7448 46.4635 72.2083 46.3906 72.7188 46.3906C73.3333 46.3906 73.875 46.4948 74.3438 46.7031C74.8177 46.9115 75.1875 47.2266 75.4531 47.6484C75.724 48.0651 75.8594 48.5885 75.8594 49.2188V53.1562C75.8594 53.4375 75.8828 53.737 75.9297 54.0547C75.9818 54.3724 76.0573 54.6458 76.1562 54.875V55H74.6484C74.5755 54.8333 74.5182 54.612 74.4766 54.3359C74.4349 54.0547 74.4141 53.7943 74.4141 53.5547ZM74.6641 49.875L74.6797 50.8906H73.2188C72.8073 50.8906 72.4401 50.9245 72.1172 50.9922C71.7943 51.0547 71.5234 51.151 71.3047 51.2812C71.0859 51.4115 70.9193 51.5755 70.8047 51.7734C70.6901 51.9661 70.6328 52.1927 70.6328 52.4531C70.6328 52.7188 70.6927 52.9609 70.8125 53.1797C70.9323 53.3984 71.112 53.5729 71.3516 53.7031C71.5964 53.8281 71.8958 53.8906 72.25 53.8906C72.6927 53.8906 73.0833 53.7969 73.4219 53.6094C73.7604 53.4219 74.0286 53.1927 74.2266 52.9219C74.4297 52.651 74.5391 52.388 74.5547 52.1328L75.1719 52.8281C75.1354 53.0469 75.0365 53.2891 74.875 53.5547C74.7135 53.8203 74.4974 54.0755 74.2266 54.3203C73.9609 54.5599 73.6432 54.7604 73.2734 54.9219C72.9089 55.0781 72.4974 55.1562 72.0391 55.1562C71.4661 55.1562 70.9635 55.0443 70.5312 54.8203C70.1042 54.5964 69.7708 54.2969 69.5312 53.9219C69.2969 53.5417 69.1797 53.1172 69.1797 52.6484C69.1797 52.1953 69.2682 51.7969 69.4453 51.4531C69.6224 51.1042 69.8776 50.8151 70.2109 50.5859C70.5443 50.3516 70.9453 50.1745 71.4141 50.0547C71.8828 49.9349 72.4062 49.875 72.9844 49.875H74.6641ZM79.5703 48.2266V55H78.1172V46.5469H79.4922L79.5703 48.2266ZM79.2734 50.4531L78.6016 50.4297C78.6068 49.8516 78.6823 49.3177 78.8281 48.8281C78.974 48.3333 79.1901 47.9036 79.4766 47.5391C79.763 47.1745 80.1198 46.8932 80.5469 46.6953C80.974 46.4922 81.4688 46.3906 82.0312 46.3906C82.4271 46.3906 82.7917 46.4479 83.125 46.5625C83.4583 46.6719 83.7474 46.8464 83.9922 47.0859C84.237 47.3255 84.4271 47.6328 84.5625 48.0078C84.6979 48.3828 84.7656 48.8359 84.7656 49.3672V55H83.3203V49.4375C83.3203 48.9948 83.2448 48.6406 83.0938 48.375C82.9479 48.1094 82.7396 47.9167 82.4688 47.7969C82.1979 47.6719 81.8802 47.6094 81.5156 47.6094C81.0885 47.6094 80.7318 47.6849 80.4453 47.8359C80.1589 47.987 79.9297 48.1953 79.7578 48.4609C79.5859 48.7266 79.4609 49.0312 79.3828 49.375C79.3099 49.7135 79.2734 50.0729 79.2734 50.4531ZM84.75 49.6562L83.7812 49.9531C83.7865 49.4896 83.862 49.0443 84.0078 48.6172C84.1589 48.1901 84.375 47.8099 84.6562 47.4766C84.9427 47.1432 85.2943 46.8802 85.7109 46.6875C86.1276 46.4896 86.6042 46.3906 87.1406 46.3906C87.5938 46.3906 87.9948 46.4505 88.3438 46.5703C88.6979 46.6901 88.9948 46.875 89.2344 47.125C89.4792 47.3698 89.6641 47.6849 89.7891 48.0703C89.9141 48.4557 89.9766 48.9141 89.9766 49.4453V55H88.5234V49.4297C88.5234 48.9557 88.4479 48.5885 88.2969 48.3281C88.151 48.0625 87.9427 47.8776 87.6719 47.7734C87.4062 47.6641 87.0885 47.6094 86.7188 47.6094C86.401 47.6094 86.1198 47.6641 85.875 47.7734C85.6302 47.8828 85.4245 48.0339 85.2578 48.2266C85.0911 48.4141 84.9635 48.6302 84.875 48.875C84.7917 49.1198 84.75 49.3802 84.75 49.6562ZM97.5781 43V55H96.1328V43H97.5781ZM97.2344 50.4531L96.6328 50.4297C96.638 49.8516 96.724 49.3177 96.8906 48.8281C97.0573 48.3333 97.2917 47.9036 97.5938 47.5391C97.8958 47.1745 98.2552 46.8932 98.6719 46.6953C99.0938 46.4922 99.5599 46.3906 100.07 46.3906C100.487 46.3906 100.862 46.4479 101.195 46.5625C101.529 46.6719 101.812 46.849 102.047 47.0938C102.286 47.3385 102.469 47.6562 102.594 48.0469C102.719 48.4323 102.781 48.9036 102.781 49.4609V55H101.328V49.4453C101.328 49.0026 101.263 48.6484 101.133 48.3828C101.003 48.112 100.812 47.9167 100.562 47.7969C100.312 47.6719 100.005 47.6094 99.6406 47.6094C99.2812 47.6094 98.9531 47.6849 98.6562 47.8359C98.3646 47.987 98.112 48.1953 97.8984 48.4609C97.6901 48.7266 97.526 49.0312 97.4062 49.375C97.2917 49.7135 97.2344 50.0729 97.2344 50.4531ZM110.117 53.0469V46.5469H111.57V55H110.188L110.117 53.0469ZM110.391 51.2656L110.992 51.25C110.992 51.8125 110.932 52.3333 110.812 52.8125C110.698 53.2865 110.51 53.6979 110.25 54.0469C109.99 54.3958 109.648 54.6693 109.227 54.8672C108.805 55.0599 108.292 55.1562 107.688 55.1562C107.276 55.1562 106.898 55.0964 106.555 54.9766C106.216 54.8568 105.924 54.6719 105.68 54.4219C105.435 54.1719 105.245 53.8464 105.109 53.4453C104.979 53.0443 104.914 52.5625 104.914 52V46.5469H106.359V52.0156C106.359 52.3958 106.401 52.7109 106.484 52.9609C106.573 53.2057 106.69 53.401 106.836 53.5469C106.987 53.6875 107.154 53.7865 107.336 53.8438C107.523 53.901 107.716 53.9297 107.914 53.9297C108.529 53.9297 109.016 53.8125 109.375 53.5781C109.734 53.3385 109.992 53.0182 110.148 52.6172C110.31 52.2109 110.391 51.7604 110.391 51.2656ZM115.211 48.2266V55H113.758V46.5469H115.133L115.211 48.2266ZM114.914 50.4531L114.242 50.4297C114.247 49.8516 114.323 49.3177 114.469 48.8281C114.615 48.3333 114.831 47.9036 115.117 47.5391C115.404 47.1745 115.76 46.8932 116.188 46.6953C116.615 46.4922 117.109 46.3906 117.672 46.3906C118.068 46.3906 118.432 46.4479 118.766 46.5625C119.099 46.6719 119.388 46.8464 119.633 47.0859C119.878 47.3255 120.068 47.6328 120.203 48.0078C120.339 48.3828 120.406 48.8359 120.406 49.3672V55H118.961V49.4375C118.961 48.9948 118.885 48.6406 118.734 48.375C118.589 48.1094 118.38 47.9167 118.109 47.7969C117.839 47.6719 117.521 47.6094 117.156 47.6094C116.729 47.6094 116.372 47.6849 116.086 47.8359C115.799 47.987 115.57 48.1953 115.398 48.4609C115.227 48.7266 115.102 49.0312 115.023 49.375C114.951 49.7135 114.914 50.0729 114.914 50.4531ZM120.391 49.6562L119.422 49.9531C119.427 49.4896 119.503 49.0443 119.648 48.6172C119.799 48.1901 120.016 47.8099 120.297 47.4766C120.583 47.1432 120.935 46.8802 121.352 46.6875C121.768 46.4896 122.245 46.3906 122.781 46.3906C123.234 46.3906 123.635 46.4505 123.984 46.5703C124.339 46.6901 124.635 46.875 124.875 47.125C125.12 47.3698 125.305 47.6849 125.43 48.0703C125.555 48.4557 125.617 48.9141 125.617 49.4453V55H124.164V49.4297C124.164 48.9557 124.089 48.5885 123.938 48.3281C123.792 48.0625 123.583 47.8776 123.312 47.7734C123.047 47.6641 122.729 47.6094 122.359 47.6094C122.042 47.6094 121.76 47.6641 121.516 47.7734C121.271 47.8828 121.065 48.0339 120.898 48.2266C120.732 48.4141 120.604 48.6302 120.516 48.875C120.432 49.1198 120.391 49.3802 120.391 49.6562ZM132.789 53.5547V49.2031C132.789 48.8698 132.721 48.5807 132.586 48.3359C132.456 48.0859 132.258 47.8932 131.992 47.7578C131.727 47.6224 131.398 47.5547 131.008 47.5547C130.643 47.5547 130.323 47.6172 130.047 47.7422C129.776 47.8672 129.562 48.0312 129.406 48.2344C129.255 48.4375 129.18 48.6562 129.18 48.8906H127.734C127.734 48.5885 127.812 48.2891 127.969 47.9922C128.125 47.6953 128.349 47.4271 128.641 47.1875C128.938 46.9427 129.292 46.75 129.703 46.6094C130.12 46.4635 130.583 46.3906 131.094 46.3906C131.708 46.3906 132.25 46.4948 132.719 46.7031C133.193 46.9115 133.562 47.2266 133.828 47.6484C134.099 48.0651 134.234 48.5885 134.234 49.2188V53.1562C134.234 53.4375 134.258 53.737 134.305 54.0547C134.357 54.3724 134.432 54.6458 134.531 54.875V55H133.023C132.951 54.8333 132.893 54.612 132.852 54.3359C132.81 54.0547 132.789 53.7943 132.789 53.5547ZM133.039 49.875L133.055 50.8906H131.594C131.182 50.8906 130.815 50.9245 130.492 50.9922C130.169 51.0547 129.898 51.151 129.68 51.2812C129.461 51.4115 129.294 51.5755 129.18 51.7734C129.065 51.9661 129.008 52.1927 129.008 52.4531C129.008 52.7188 129.068 52.9609 129.188 53.1797C129.307 53.3984 129.487 53.5729 129.727 53.7031C129.971 53.8281 130.271 53.8906 130.625 53.8906C131.068 53.8906 131.458 53.7969 131.797 53.6094C132.135 53.4219 132.404 53.1927 132.602 52.9219C132.805 52.651 132.914 52.388 132.93 52.1328L133.547 52.8281C133.51 53.0469 133.411 53.2891 133.25 53.5547C133.089 53.8203 132.872 54.0755 132.602 54.3203C132.336 54.5599 132.018 54.7604 131.648 54.9219C131.284 55.0781 130.872 55.1562 130.414 55.1562C129.841 55.1562 129.339 55.0443 128.906 54.8203C128.479 54.5964 128.146 54.2969 127.906 53.9219C127.672 53.5417 127.555 53.1172 127.555 52.6484C127.555 52.1953 127.643 51.7969 127.82 51.4531C127.997 51.1042 128.253 50.8151 128.586 50.5859C128.919 50.3516 129.32 50.1745 129.789 50.0547C130.258 49.9349 130.781 49.875 131.359 49.875H133.039ZM137.953 48.3516V55H136.508V46.5469H137.875L137.953 48.3516ZM137.609 50.4531L137.008 50.4297C137.013 49.8516 137.099 49.3177 137.266 48.8281C137.432 48.3333 137.667 47.9036 137.969 47.5391C138.271 47.1745 138.63 46.8932 139.047 46.6953C139.469 46.4922 139.935 46.3906 140.445 46.3906C140.862 46.3906 141.237 46.4479 141.57 46.5625C141.904 46.6719 142.188 46.849 142.422 47.0938C142.661 47.3385 142.844 47.6562 142.969 48.0469C143.094 48.4323 143.156 48.9036 143.156 49.4609V55H141.703V49.4453C141.703 49.0026 141.638 48.6484 141.508 48.3828C141.378 48.112 141.188 47.9167 140.938 47.7969C140.688 47.6719 140.38 47.6094 140.016 47.6094C139.656 47.6094 139.328 47.6849 139.031 47.8359C138.74 47.987 138.487 48.1953 138.273 48.4609C138.065 48.7266 137.901 49.0312 137.781 49.375C137.667 49.7135 137.609 50.0729 137.609 50.4531Z",fill:"#1E293B"}),(0,C.createElement)("path",{d:"M201.883 70.9274H199.984V67.6895C199.984 66.9395 199.89 66.2894 199.1 66.2894C198.31 66.2894 198.062 66.9895 198.062 67.901V70.9262H196.177V62.3015H198.062V64.3508C198.062 64.9758 198.05 65.6508 198.05 65.6508C198.345 65.1008 198.899 64.6508 199.76 64.6508C201.446 64.6508 201.883 65.7886 201.883 67.2887V70.9274ZM209.984 69.9023C209.571 70.3532 208.711 71.0774 207.048 71.0774C204.654 71.0774 202.779 69.4023 202.779 66.6267C202.779 63.8397 204.677 62.1765 207.047 62.1765C208.722 62.1765 209.63 62.9142 209.842 63.1515L209.254 64.827C209.101 64.6143 208.23 63.9253 207.155 63.9253C205.776 63.9253 204.714 64.9004 204.714 66.5894C204.714 68.2785 205.821 69.2396 207.155 69.2396C208.169 69.2396 208.9 68.8146 209.349 68.3268L209.984 69.9023ZM215.951 70.9274H214.148L214.111 70.2782C213.865 70.5409 213.392 71.0659 212.449 71.0659C211.424 71.0659 210.338 70.4782 210.338 69.1031C210.338 67.728 211.529 67.2653 212.602 67.2153L214.064 67.153V67.0157C214.064 66.3656 213.628 66.0279 212.873 66.0279C212.13 66.0279 211.387 66.3779 211.092 66.578L210.597 65.2779C211.092 65.0156 212.001 64.6528 213.085 64.6528C214.17 64.6528 214.795 64.9151 215.255 65.3656C215.703 65.8164 215.952 66.4157 215.952 67.4534L215.951 70.9274ZM214.076 68.2145L213.144 68.2768C212.567 68.3018 212.225 68.5637 212.225 69.0269C212.225 69.5019 212.59 69.7896 213.109 69.7896C213.616 69.7896 213.958 69.4396 214.076 69.2273V68.2145ZM220.868 71.0647C220.008 71.0647 219.393 70.727 219.029 70.152V73.1882H217.144V64.7643H218.936L218.924 65.5521H218.948C219.373 65.0143 219.998 64.6504 220.882 64.6504C222.557 64.6504 223.618 66.0382 223.618 67.8506C223.618 69.663 222.555 71.0647 220.868 71.0647ZM220.326 66.2283C219.524 66.2283 218.97 66.8784 218.97 67.8268C218.97 68.7752 219.524 69.4253 220.326 69.4253C221.14 69.4253 221.694 68.7752 221.694 67.8268C221.694 66.8784 221.14 66.2267 220.326 66.2267V66.2283ZM227.991 66.2894H226.706V68.5027C226.706 69.0277 226.776 69.1527 226.87 69.2654C226.952 69.3654 227.07 69.4154 227.318 69.4154C227.511 69.4109 227.703 69.3728 227.884 69.3027L227.978 70.8655C227.541 70.9951 227.089 71.0624 226.633 71.0655C225.961 71.0655 225.513 70.8528 225.218 70.4917C224.923 70.1306 224.805 69.6167 224.805 68.6789V66.2894H223.98V64.7766H224.805V63.1015H226.704V64.7766H227.989L227.991 66.2894ZM233.569 70.3274C233.51 70.3774 232.897 71.0651 231.352 71.0651C229.76 71.0651 228.286 69.915 228.286 67.8649C228.286 65.8021 229.784 64.652 231.376 64.652C232.861 64.652 233.533 65.3021 233.533 65.3021L233.121 66.8149C232.702 66.4598 232.172 66.2649 231.623 66.2648C230.821 66.2648 230.184 66.8526 230.184 67.8276C230.184 68.8027 230.762 69.4154 231.647 69.4154C232.531 69.4154 233.122 68.8154 233.122 68.8154L233.569 70.3274ZM240.067 70.9274H238.168V67.6895C238.168 66.9395 238.074 66.2894 237.284 66.2894C236.493 66.2894 236.246 66.9895 236.246 67.9022V70.9274H234.361V62.3015H236.246V64.3508C236.246 64.9758 236.234 65.6508 236.234 65.6508C236.529 65.1008 237.083 64.6508 237.944 64.6508C239.63 64.6508 240.067 65.7886 240.067 67.2887V70.9274ZM246.47 70.9274H244.667L244.631 70.2774C244.385 70.5401 243.912 71.0651 242.968 71.0651C241.944 71.0651 240.858 70.4774 240.858 69.1023C240.858 67.7272 242.049 67.2645 243.122 67.2145L244.584 67.1522V67.0149C244.584 66.3648 244.148 66.0271 243.393 66.0271C242.65 66.0271 241.907 66.3771 241.612 66.5771L241.116 65.2779C241.611 65.0156 242.519 64.6528 243.604 64.6528C244.689 64.6528 245.314 64.9151 245.774 65.3656C246.222 65.8164 246.471 66.4157 246.471 67.4534L246.47 70.9274ZM244.595 68.2145L243.663 68.2768C243.085 68.3018 242.743 68.5637 242.743 69.0269C242.743 69.5019 243.109 69.7896 243.628 69.7896C244.135 69.7896 244.477 69.4396 244.595 69.2273V68.2145Z",fill:"#4D4D4D"}),(0,C.createElement)("path",{opacity:"0.5",d:"M227.64 51.2725H233.72V57.3531H227.64V51.2725Z",fill:"#0074BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M221.559 51.2725H227.64V57.3531H221.559V51.2725ZM215.478 51.2725H221.559V57.3531H215.478V51.2725Z",fill:"#0074BF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M209.397 51.2725H215.478V57.3531H209.397V51.2725Z",fill:"#0074BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M233.721 45.1918H239.802V51.2725H233.721V45.1918Z",fill:"#0082BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M227.64 45.1918H233.72V51.2725H227.64V45.1918Z",fill:"#0082BF"}),(0,C.createElement)("path",{d:"M221.559 45.1918H227.64V51.2725H221.559V45.1918ZM215.478 45.1918H221.559V51.2725H215.478V45.1918Z",fill:"#0082BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M209.397 45.1918H215.478V51.2725H209.397V45.1918Z",fill:"#0082BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M203.316 45.1919H209.397V51.2725H203.316V45.1919Z",fill:"#0082BF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M239.802 39.1102H245.883V45.1908H239.802V39.1102Z",fill:"#008FBF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M233.721 39.1102H239.802V45.1908H233.721V39.1102Z",fill:"#008FBF"}),(0,C.createElement)("path",{d:"M227.639 39.1102H233.72V45.1908H227.639V39.1102ZM221.559 39.1102H227.639V45.1908H221.559V39.1102ZM215.478 39.1102H221.559V45.1908H215.478V39.1102ZM209.397 39.1102H215.478V45.1908H209.397V39.1102Z",fill:"#008FBF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M203.316 39.1102H209.397V45.1908H203.316V39.1102Z",fill:"#008FBF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M197.235 39.1102H203.316V45.1908H197.235V39.1102Z",fill:"#008FBF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M239.802 33.0295H245.883V39.1101H239.802V33.0295Z",fill:"#009DBF"}),(0,C.createElement)("path",{d:"M233.721 33.0295H239.802V39.1101H233.721V33.0295ZM227.64 33.0295H233.72V39.1101H227.64V33.0295ZM221.559 33.0295H227.64V39.1101H221.559V33.0295ZM215.478 33.0295H221.559V39.1101H215.478V33.0295ZM209.398 33.0295H215.478V39.1101H209.398V33.0295ZM203.316 33.0295H209.397V39.1101H203.316V33.0295Z",fill:"#009DBF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M197.235 33.0295H203.316V39.1101H197.235V33.0295Z",fill:"#009DBF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M239.802 26.9489H245.883V33.0295H239.802V26.9489Z",fill:"#00ABBF"}),(0,C.createElement)("path",{d:"M233.721 26.9489H239.802V33.0295H233.721V26.9489ZM227.64 26.9489H233.72V33.0295H227.64V26.9489ZM221.559 26.9489H227.64V33.0295H221.559V26.9489ZM215.478 26.9489H221.559V33.0295H215.478V26.9489ZM209.398 26.9489H215.478V33.0295H209.398V26.9489ZM203.316 26.9489H209.397V33.0295H203.316V26.9489Z",fill:"#00ABBF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M197.235 26.9489H203.316V33.0295H197.235V26.9489Z",fill:"#00ABBF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M239.802 20.8682H245.883V26.9488H239.802V20.8682Z",fill:"#00B9BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M233.721 20.8682H239.802V26.9488H233.721V20.8682Z",fill:"#00B9BF"}),(0,C.createElement)("path",{d:"M227.639 20.8682H233.72V26.9488H227.639V20.8682ZM221.559 20.8682H227.639V26.9488H221.559V20.8682ZM215.478 20.8682H221.559V26.9488H215.478V20.8682ZM209.397 20.8682H215.478V26.9488H209.397V20.8682Z",fill:"#00B9BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M203.316 20.8682H209.397V26.9488H203.316V20.8682Z",fill:"#00B9BF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M197.235 20.8682H203.316V26.9488H197.235V20.8682Z",fill:"#00B9BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M233.721 14.7866H239.802V20.8672H233.721V14.7866Z",fill:"#00C6BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M227.64 14.7866H233.72V20.8672H227.64V14.7866Z",fill:"#00C6BF"}),(0,C.createElement)("path",{d:"M221.559 14.7866H227.64V20.8672H221.559V14.7866ZM215.478 14.7866H221.559V20.8672H215.478V14.7866Z",fill:"#00C6BF"}),(0,C.createElement)("path",{opacity:"0.8",d:"M209.397 14.7866H215.478V20.8672H209.397V14.7866Z",fill:"#00C6BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M203.316 14.7866H209.397V20.8672H203.316V14.7866Z",fill:"#00C6BF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M227.64 8.70587H233.72V14.7865H227.64V8.70587Z",fill:"#00D4BF"}),(0,C.createElement)("path",{opacity:"0.7",d:"M221.559 8.70587H227.64V14.7865H221.559V8.70587ZM215.478 8.70587H221.559V14.7865H215.478V8.70587Z",fill:"#00D4BF"}),(0,C.createElement)("path",{opacity:"0.5",d:"M209.397 8.70587H215.478V14.7865H209.397V8.70587Z",fill:"#00D4BF"}),(0,C.createElement)("path",{d:"M213.246 31.1112L214.941 27.319C215.558 26.3468 215.476 25.1556 214.8 24.4799C214.71 24.3899 214.611 24.31 214.503 24.2419C214.271 24.0996 214.011 24.0096 213.741 23.9781C213.471 23.9466 213.197 23.9743 212.939 24.0593C212.352 24.2418 211.851 24.6296 211.527 25.1516C211.527 25.1516 209.207 30.5636 208.344 32.9962C207.48 35.4289 207.825 39.8898 211.153 43.2251C214.683 46.7551 219.795 47.562 223.055 45.1152C223.191 45.0467 223.319 44.9631 223.437 44.8661L233.482 36.4778C233.97 36.0744 234.692 35.2433 234.044 34.2953C233.412 33.3704 232.213 33.9998 231.724 34.3124L225.943 38.5161C225.916 38.5385 225.885 38.5552 225.851 38.5651C225.817 38.5751 225.782 38.5781 225.747 38.5741C225.712 38.57 225.679 38.5589 225.648 38.5415C225.618 38.5241 225.591 38.5007 225.57 38.4728C225.423 38.2922 225.396 37.8142 225.627 37.6246L234.49 30.1037C235.255 29.4138 235.362 28.4113 234.742 27.7245C234.137 27.0517 233.176 27.0719 232.403 27.7678L224.424 34.0058C224.387 34.0363 224.344 34.0588 224.297 34.072C224.251 34.0851 224.202 34.0887 224.155 34.0825C224.107 34.0763 224.061 34.0604 224.019 34.0357C223.978 34.0111 223.942 33.9783 223.914 33.9393C223.757 33.7628 223.696 33.4612 223.874 33.2847L232.91 24.5152C233.253 24.1959 233.454 23.7538 233.471 23.286C233.487 22.8181 233.318 22.3628 232.999 22.02C232.841 21.8535 232.651 21.721 232.44 21.6307C232.228 21.5403 232.001 21.494 231.772 21.4945C231.299 21.4894 230.843 21.6706 230.503 21.9988L221.269 30.6725C221.049 30.8934 220.616 30.6725 220.563 30.4143C220.554 30.3681 220.556 30.3203 220.57 30.2752C220.584 30.23 220.608 30.1891 220.642 30.1561L227.71 22.1088C227.881 21.9494 228.018 21.7574 228.113 21.544C228.208 21.3306 228.259 21.1003 228.264 20.8667C228.268 20.6332 228.225 20.4011 228.138 20.1845C228.051 19.9678 227.921 19.7708 227.756 19.6054C227.591 19.4399 227.394 19.3093 227.178 19.2214C226.962 19.1334 226.73 19.0899 226.496 19.0934C226.262 19.0969 226.032 19.1473 225.818 19.2417C225.605 19.3361 225.412 19.4725 225.252 19.6428L214.534 31.4925C214.15 31.8767 213.584 31.8959 213.315 31.673C213.232 31.6071 213.178 31.5113 213.166 31.4062C213.153 31.3011 213.182 31.1951 213.246 31.1112Z",fill:"white"}),(0,C.createElement)("path",{d:"M187.682 83.4008H185.671V82.5891H187.682C188.072 82.5891 188.387 82.5271 188.628 82.403C188.869 82.2789 189.045 82.1066 189.156 81.886C189.269 81.6654 189.326 81.4138 189.326 81.1312C189.326 80.8727 189.269 80.6297 189.156 80.4022C189.045 80.1747 188.869 79.992 188.628 79.8542C188.387 79.7129 188.072 79.6422 187.682 79.6422H185.904V86.3529H184.906V78.8253H187.682C188.251 78.8253 188.732 78.9236 189.125 79.12C189.517 79.3165 189.816 79.5888 190.019 79.9369C190.222 80.2816 190.324 80.6762 190.324 81.1208C190.324 81.6034 190.222 82.0152 190.019 82.3565C189.816 82.6977 189.517 82.9579 189.125 83.1371C188.732 83.3129 188.251 83.4008 187.682 83.4008ZM192.397 81.6378V86.3529H191.441V80.7589H192.371L192.397 81.6378ZM194.145 80.7279L194.139 81.6172C194.06 81.5999 193.984 81.5896 193.912 81.5861C193.843 81.5792 193.764 81.5758 193.674 81.5758C193.454 81.5758 193.259 81.6103 193.09 81.6792C192.921 81.7481 192.778 81.8446 192.661 81.9687C192.544 82.0928 192.451 82.241 192.382 82.4133C192.316 82.5822 192.273 82.7683 192.252 82.9717L191.984 83.1268C191.984 82.789 192.016 82.4719 192.082 82.1755C192.151 81.8791 192.256 81.6172 192.397 81.3897C192.538 81.1587 192.718 80.9795 192.935 80.852C193.155 80.721 193.417 80.6555 193.721 80.6555C193.79 80.6555 193.869 80.6641 193.959 80.6814C194.048 80.6952 194.11 80.7107 194.145 80.7279ZM196.068 80.7589V86.3529H195.106V80.7589H196.068ZM195.034 79.2751C195.034 79.12 195.08 78.989 195.173 78.8822C195.27 78.7754 195.411 78.7219 195.597 78.7219C195.78 78.7219 195.92 78.7754 196.016 78.8822C196.116 78.989 196.166 79.12 196.166 79.2751C196.166 79.4233 196.116 79.5509 196.016 79.6577C195.92 79.7611 195.78 79.8128 195.597 79.8128C195.411 79.8128 195.27 79.7611 195.173 79.6577C195.08 79.5509 195.034 79.4233 195.034 79.2751ZM199.304 85.4895L200.835 80.7589H201.812L199.801 86.3529H199.16L199.304 85.4895ZM198.027 80.7589L199.604 85.5154L199.713 86.3529H199.072L197.045 80.7589H198.027ZM205.948 85.3964V82.5167C205.948 82.2961 205.903 82.1049 205.813 81.9429C205.727 81.7774 205.596 81.6499 205.42 81.5603C205.245 81.4707 205.028 81.4259 204.769 81.4259C204.528 81.4259 204.316 81.4672 204.133 81.5499C203.954 81.6327 203.813 81.7412 203.709 81.8757C203.609 82.0101 203.559 82.1548 203.559 82.3099H202.603C202.603 82.11 202.655 81.9118 202.758 81.7154C202.861 81.5189 203.01 81.3414 203.203 81.1829C203.399 81.0209 203.633 80.8933 203.906 80.8003C204.181 80.7038 204.488 80.6555 204.826 80.6555C205.233 80.6555 205.591 80.7245 205.901 80.8623C206.215 81.0002 206.46 81.2087 206.635 81.4879C206.815 81.7636 206.904 82.11 206.904 82.5271V85.1328C206.904 85.3189 206.92 85.5171 206.951 85.7273C206.985 85.9376 207.035 86.1185 207.101 86.2702V86.3529H206.103C206.055 86.2426 206.017 86.0961 205.989 85.9135C205.962 85.7273 205.948 85.555 205.948 85.3964ZM206.113 82.9614L206.124 83.6335H205.157C204.885 83.6335 204.642 83.6559 204.428 83.7007C204.214 83.742 204.035 83.8058 203.89 83.892C203.745 83.9781 203.635 84.0867 203.559 84.2177C203.483 84.3452 203.446 84.4951 203.446 84.6675C203.446 84.8433 203.485 85.0035 203.564 85.1483C203.644 85.293 203.763 85.4085 203.921 85.4947C204.083 85.5774 204.281 85.6188 204.516 85.6188C204.809 85.6188 205.067 85.5567 205.291 85.4326C205.515 85.3086 205.693 85.1569 205.824 84.9777C205.958 84.7984 206.031 84.6244 206.041 84.4555L206.449 84.9156C206.425 85.0604 206.36 85.2207 206.253 85.3964C206.146 85.5722 206.003 85.7411 205.824 85.9031C205.648 86.0617 205.438 86.1944 205.193 86.3012C204.952 86.4046 204.679 86.4563 204.376 86.4563C203.997 86.4563 203.664 86.3822 203.378 86.234C203.096 86.0858 202.875 85.8876 202.717 85.6394C202.561 85.3878 202.484 85.1069 202.484 84.7967C202.484 84.4969 202.543 84.2332 202.66 84.0057C202.777 83.7748 202.946 83.5835 203.166 83.4318C203.387 83.2767 203.652 83.1595 203.963 83.0803C204.273 83.001 204.619 82.9614 205.002 82.9614H206.113ZM210.647 85.6705C210.875 85.6705 211.085 85.6239 211.278 85.5309C211.471 85.4378 211.63 85.3103 211.754 85.1483C211.878 84.9828 211.949 84.795 211.966 84.5848H212.876C212.858 84.9156 212.746 85.2241 212.54 85.5102C212.336 85.7928 212.069 86.022 211.738 86.1978C211.407 86.3701 211.044 86.4563 210.647 86.4563C210.227 86.4563 209.86 86.3822 209.546 86.234C209.236 86.0858 208.977 85.8824 208.771 85.6239C208.567 85.3654 208.414 85.069 208.311 84.7347C208.211 84.3969 208.161 84.0402 208.161 83.6645V83.4473C208.161 83.0717 208.211 82.7166 208.311 82.3823C208.414 82.0445 208.567 81.7464 208.771 81.4879C208.977 81.2294 209.236 81.026 209.546 80.8778C209.86 80.7296 210.227 80.6555 210.647 80.6555C211.085 80.6555 211.468 80.7451 211.795 80.9244C212.123 81.1001 212.379 81.3414 212.565 81.6482C212.755 81.9515 212.858 82.2961 212.876 82.6822H211.966C211.949 82.4513 211.883 82.2427 211.769 82.0566C211.659 81.8705 211.507 81.7223 211.314 81.612C211.125 81.4982 210.902 81.4414 210.647 81.4414C210.354 81.4414 210.108 81.5 209.908 81.6172C209.712 81.7309 209.555 81.886 209.438 82.0825C209.324 82.2755 209.241 82.4909 209.189 82.7287C209.141 82.9631 209.117 83.2026 209.117 83.4473V83.6645C209.117 83.9092 209.141 84.1505 209.189 84.3883C209.238 84.6261 209.319 84.8415 209.432 85.0345C209.55 85.2276 209.706 85.3827 209.903 85.4998C210.103 85.6136 210.351 85.6705 210.647 85.6705ZM215.523 85.7739L217.079 80.7589H218.103L215.859 87.2163C215.807 87.3542 215.738 87.5024 215.652 87.6609C215.569 87.8229 215.462 87.9763 215.331 88.1211C215.2 88.2658 215.042 88.383 214.856 88.4726C214.673 88.5657 214.454 88.6122 214.199 88.6122C214.123 88.6122 214.027 88.6019 213.91 88.5812C213.793 88.5605 213.71 88.5433 213.662 88.5295L213.656 87.754C213.684 87.7574 213.727 87.7609 213.786 87.7643C213.848 87.7712 213.891 87.7747 213.915 87.7747C214.132 87.7747 214.316 87.7454 214.468 87.6868C214.62 87.6316 214.747 87.5368 214.851 87.4024C214.957 87.2714 215.049 87.0905 215.125 86.8596L215.523 85.7739ZM214.38 80.7589L215.833 85.1018L216.081 86.1099L215.393 86.4615L213.336 80.7589H214.38ZM223.583 82.7597V83.5456H221.06V82.7597H223.583ZM229.864 78.8253V86.3529H228.882V78.8253H229.864ZM232.284 78.8253V79.6422H226.468V78.8253H232.284ZM235.06 86.4563C234.671 86.4563 234.318 86.3908 234 86.2598C233.687 86.1254 233.416 85.9376 233.189 85.6963C232.965 85.455 232.792 85.169 232.672 84.8381C232.551 84.5072 232.491 84.1453 232.491 83.7524V83.5352C232.491 83.0803 232.558 82.6753 232.692 82.3203C232.827 81.9618 233.01 81.6585 233.24 81.4104C233.471 81.1622 233.733 80.9743 234.026 80.8468C234.319 80.7193 234.623 80.6555 234.936 80.6555C235.336 80.6555 235.681 80.7245 235.97 80.8623C236.263 81.0002 236.503 81.1932 236.689 81.4414C236.875 81.6861 237.013 81.9756 237.102 82.3099C237.192 82.6408 237.237 83.0027 237.237 83.3956V83.8248H233.06V83.0441H236.28V82.9717C236.267 82.7235 236.215 82.4823 236.125 82.2479C236.039 82.0135 235.901 81.8205 235.712 81.6689C235.522 81.5172 235.264 81.4414 234.936 81.4414C234.719 81.4414 234.519 81.4879 234.337 81.581C234.154 81.6706 233.997 81.805 233.866 81.9842C233.735 82.1635 233.633 82.3823 233.561 82.6408C233.489 82.8993 233.452 83.1975 233.452 83.5352V83.7524C233.452 84.0178 233.489 84.2677 233.561 84.502C233.637 84.733 233.745 84.9363 233.887 85.1121C234.031 85.2879 234.206 85.4257 234.409 85.5257C234.616 85.6257 234.85 85.6756 235.112 85.6756C235.45 85.6756 235.736 85.6067 235.97 85.4688C236.205 85.331 236.41 85.1466 236.585 84.9156L237.165 85.3758C237.044 85.5584 236.891 85.7325 236.704 85.8979C236.518 86.0634 236.289 86.1978 236.017 86.3012C235.748 86.4046 235.429 86.4563 235.06 86.4563ZM239.31 81.6378V86.3529H238.354V80.7589H239.284L239.31 81.6378ZM241.058 80.7279L241.052 81.6172C240.973 81.5999 240.897 81.5896 240.825 81.5861C240.756 81.5792 240.677 81.5758 240.587 81.5758C240.366 81.5758 240.172 81.6103 240.003 81.6792C239.834 81.7481 239.691 81.8446 239.574 81.9687C239.457 82.0928 239.364 82.241 239.295 82.4133C239.229 82.5822 239.186 82.7683 239.165 82.9717L238.896 83.1268C238.896 82.789 238.929 82.4719 238.995 82.1755C239.064 81.8791 239.169 81.6172 239.31 81.3897C239.451 81.1587 239.631 80.9795 239.848 80.852C240.068 80.721 240.33 80.6555 240.634 80.6555C240.703 80.6555 240.782 80.6641 240.871 80.6814C240.961 80.6952 241.023 80.7107 241.058 80.7279ZM242.893 81.8705V86.3529H241.931V80.7589H242.841L242.893 81.8705ZM242.696 83.3439L242.252 83.3284C242.255 82.9459 242.305 82.5926 242.402 82.2686C242.498 81.9411 242.641 81.6568 242.831 81.4155C243.02 81.1743 243.257 80.9881 243.539 80.8572C243.822 80.7227 244.149 80.6555 244.521 80.6555C244.783 80.6555 245.025 80.6934 245.245 80.7693C245.466 80.8416 245.657 80.9571 245.819 81.1157C245.981 81.2742 246.107 81.4776 246.197 81.7257C246.286 81.9739 246.331 82.2737 246.331 82.6253V86.3529H245.375V82.6718C245.375 82.3789 245.325 82.1445 245.225 81.9687C245.128 81.7929 244.99 81.6654 244.811 81.5861C244.632 81.5034 244.422 81.4621 244.18 81.4621C243.898 81.4621 243.662 81.512 243.472 81.612C243.282 81.7119 243.131 81.8498 243.017 82.0256C242.903 82.2014 242.821 82.403 242.769 82.6305C242.721 82.8545 242.696 83.0923 242.696 83.3439ZM246.321 82.8166L245.68 83.0131C245.683 82.7063 245.733 82.4116 245.83 82.129C245.929 81.8464 246.072 81.5947 246.259 81.3742C246.448 81.1536 246.681 80.9795 246.957 80.852C247.232 80.721 247.548 80.6555 247.903 80.6555C248.203 80.6555 248.468 80.6952 248.699 80.7744C248.933 80.8537 249.13 80.9761 249.288 81.1415C249.45 81.3035 249.573 81.512 249.655 81.7671C249.738 82.0221 249.779 82.3254 249.779 82.677V86.3529H248.818V82.6667C248.818 82.353 248.768 82.11 248.668 81.9377C248.571 81.7619 248.433 81.6396 248.254 81.5706C248.078 81.4982 247.868 81.4621 247.624 81.4621C247.413 81.4621 247.227 81.4982 247.065 81.5706C246.903 81.643 246.767 81.743 246.657 81.8705C246.546 81.9946 246.462 82.1376 246.403 82.2996C246.348 82.4616 246.321 82.6339 246.321 82.8166ZM254.484 84.8691C254.484 84.7312 254.453 84.6037 254.391 84.4865C254.332 84.3659 254.21 84.2573 254.024 84.1608C253.841 84.0609 253.566 83.9747 253.197 83.9023C252.887 83.8368 252.606 83.7593 252.354 83.6697C252.106 83.58 251.894 83.4715 251.718 83.3439C251.546 83.2164 251.413 83.0665 251.32 82.8942C251.227 82.7218 251.18 82.5202 251.18 82.2893C251.18 82.0687 251.229 81.8601 251.325 81.6637C251.425 81.4672 251.565 81.2932 251.744 81.1415C251.927 80.9899 252.146 80.8709 252.401 80.7848C252.656 80.6986 252.94 80.6555 253.254 80.6555C253.702 80.6555 254.084 80.7348 254.401 80.8933C254.719 81.0519 254.962 81.2639 255.13 81.5293C255.299 81.7912 255.384 82.0825 255.384 82.403H254.427C254.427 82.2479 254.381 82.098 254.288 81.9532C254.198 81.805 254.065 81.6826 253.89 81.5861C253.717 81.4896 253.505 81.4414 253.254 81.4414C252.988 81.4414 252.773 81.4827 252.607 81.5655C252.445 81.6447 252.327 81.7464 252.251 81.8705C252.178 81.9946 252.142 82.1255 252.142 82.2634C252.142 82.3668 252.159 82.4599 252.194 82.5426C252.232 82.6219 252.297 82.696 252.39 82.7649C252.483 82.8304 252.614 82.8924 252.783 82.951C252.952 83.0096 253.168 83.0682 253.429 83.1268C253.888 83.2302 254.265 83.3543 254.562 83.499C254.858 83.6438 255.079 83.8213 255.223 84.0316C255.368 84.2418 255.441 84.4969 255.441 84.7967C255.441 85.0414 255.389 85.2655 255.286 85.4688C255.186 85.6722 255.039 85.848 254.846 85.9962C254.656 86.1409 254.429 86.2547 254.164 86.3374C253.902 86.4167 253.607 86.4563 253.28 86.4563C252.787 86.4563 252.37 86.3684 252.028 86.1926C251.687 86.0169 251.429 85.7894 251.253 85.5102C251.077 85.231 250.989 84.9363 250.989 84.6261H251.951C251.965 84.8881 252.04 85.0966 252.178 85.2517C252.316 85.4033 252.485 85.5119 252.685 85.5774C252.885 85.6394 253.083 85.6705 253.28 85.6705C253.541 85.6705 253.76 85.636 253.936 85.5671C254.115 85.4981 254.251 85.4033 254.345 85.2827C254.438 85.1621 254.484 85.0242 254.484 84.8691Z",fill:"#334155"})),o=window.wp.blockEditor,p=function({isSelected:e,attributes:t}){const l=(0,o.useBlockProps)();return t.isPreview?(0,C.createElement)("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r):(0,C.createElement)(C.Fragment,null,(0,C.createElement)("div",{...l},e?(0,C.createElement)("div",{style:{padding:"20px"}},(0,C.createElement)(n,null)):r),(0,C.createElement)(o.InspectorControls,null,(0,C.createElement)("div",{style:{padding:"20px"}},(0,C.createElement)(n,null))))},{CaptchaOptions:h,CaptchaBlockEdit:M,CaptchaBlockTip:Z}=JetFBComponents,{__:L}=wp.i18n,d={name:"hcaptcha",title:L("hCaptcha","jet-form-builder"),isActive:(C,e)=>C.provider===e.provider,description:L("Set the hCaptcha settings in the Captcha Container block to add anti-bot protection to your website.","jet-form-builder"),icon:(0,C.createElement)("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,C.createElement)("path",{d:"M19.9221 45.8709C20.2757 45.4466 20.2184 44.8161 19.7941 44.4625C19.3698 44.109 18.7393 44.1663 18.3857 44.5906L13.8944 49.9801L11.8995 47.9852C11.509 47.5946 10.8758 47.5946 10.4853 47.9852C10.0948 48.3757 10.0948 49.0089 10.4853 49.3994L12.8674 51.7815C13.4911 52.4052 14.5157 52.3587 15.0803 51.6811L19.9221 45.8709Z",fill:"currentColor"}),(0,C.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.75082 41.8091C5.86912 42.3111 6.0049 42.8167 6.15876 43.3232C5.419 44.7188 5 46.3104 5 48C5 53.5228 9.47715 58 15 58C16.3705 58 17.6766 57.7243 18.8659 57.2253C20.343 57.8385 21.8845 58.3034 23.4475 58.5872C27.9656 59.4075 32.8248 58.7321 36.7478 55.5251C40.1174 52.7705 44.7384 48.9438 48.5137 45.8085C50.4021 44.2403 52.0801 42.8441 53.286 41.8398C53.889 41.3377 54.374 40.9336 54.7083 40.6549L55.2201 40.2282C55.7727 39.7743 56.6058 38.9695 57.0825 37.8598C57.6174 36.6147 57.6538 35.0665 56.6243 33.5738C55.6927 32.2225 54.3871 31.822 53.246 31.8299L57.1077 28.58L57.1298 28.5602C59.2051 26.7055 59.7648 23.6115 57.7406 21.3871C56.7994 20.3503 55.5275 19.8112 54.1884 19.8367C53.5221 19.8494 52.8744 19.9999 52.2665 20.2625L54.2685 18.3359C56.3567 16.3875 56.4743 13.0553 54.5164 10.9668L54.5092 10.9591L54.5019 10.9515C52.4721 8.83174 49.107 8.92935 47.0976 10.8406L46.0814 11.7872C46.6606 9.98841 46.2417 7.91958 44.8308 6.51575C42.7924 4.48768 39.3658 4.5148 37.3663 6.62676L37.3536 6.64026L20.7998 24.7897L21.635 22.9358C22.3738 21.7158 22.7265 20.2198 22.5819 18.7808C22.4288 17.2581 21.6935 15.676 20.1254 14.691L20.1133 14.6834L20.1012 14.676C16.9682 12.7696 13.3972 14.5828 11.8958 16.9817C11.2205 18.0608 10.0838 20.7224 8.98585 23.4535C7.85213 26.2736 6.66003 29.4254 5.8577 31.6674C4.89326 34.3624 4.88235 38.1241 5.75082 41.8091ZM35.482 53.9766C42.2083 48.478 53.9452 38.6872 53.9452 38.6872C54.8424 37.9519 56.1697 36.4371 54.9778 34.7091C53.8155 33.0233 51.6132 34.1704 50.7142 34.7403L40.0885 42.4025C39.7234 42.7018 39.3467 42.3584 39.2475 42C39.1923 41.8002 39.1772 41.5605 39.2158 41.338C39.2224 41.3001 39.2305 41.2628 39.2403 41.2262C39.2881 41.0467 39.3748 40.8861 39.5083 40.7774L55.7971 27.0689C57.2041 25.8115 57.4006 23.9842 56.2606 22.7323C55.1483 21.5061 53.3817 21.5429 51.9617 22.8114L37.2968 34.1814C37.0114 34.4122 36.5756 34.3567 36.3588 34.0601C36.0781 33.7478 35.965 33.2207 36.2571 32.8958C36.2617 32.8908 36.2663 32.8858 36.271 32.8809L36.2807 32.8709L36.2846 32.867L52.8942 16.8827C54.1845 15.6889 54.26 13.6176 53.0573 12.3347C51.8386 11.062 49.7339 11.0862 48.4693 12.2961L31.4983 28.1058C31.4838 28.1202 31.4688 28.1335 31.4533 28.1459C31.423 28.1701 31.3911 28.1905 31.3578 28.2073C31.0944 28.3404 30.747 28.2509 30.5 28.0637C30.2204 27.8517 30.0554 27.446 30.3453 27.1645L43.3363 12.4965C44.6387 11.2918 44.6644 9.17148 43.4201 7.93354C42.1731 6.6928 40.0401 6.71164 38.8187 8.00175L19.119 29.6003C18.5763 30.1385 17.8366 30.2838 17.2985 30.1379C16.7763 29.9963 16.5 29.5 16.7518 28.9054L19.8661 21.9933C20.9821 20.25 20.9537 17.5731 19.0615 16.3845C17.1534 15.2235 14.7098 16.2553 13.5912 18.0427C12.4725 19.8301 9.32755 27.9072 7.74075 32.3413C6.95854 34.527 6.88674 37.808 7.66363 41.2045C9.4901 39.2336 12.101 38 15 38C20.5228 38 25 42.4771 25 48C25 51.2268 23.4716 54.0967 21.0992 55.9252C25.9727 57.541 31.3694 57.3386 35.482 53.9766ZM15 40C10.5817 40 7 43.5817 7 48C7 52.4182 10.5817 56 15 56C19.4183 56 23 52.4182 23 48C23 43.5817 19.4183 40 15 40Z",fill:"currentColor"})),scope:["block","inserter"],attributes:{provider:"hcaptcha"}},{registerPlugin:m}=wp.plugins,{registerBlockVariation:s}=wp.blocks;s("jet-forms/captcha-container",d),m("jf-hcaptcha",{render:function(){return(0,C.createElement)(C.Fragment,null,(0,C.createElement)(h,{provider:"hcaptcha"},(e=>(0,C.createElement)(C.Fragment,null,(0,C.createElement)(n,{...e}),(0,C.createElement)(Z,null)))),(0,C.createElement)(M,{provider:"hcaptcha"},(e=>(0,C.createElement)(p,{...e}))))}})})();