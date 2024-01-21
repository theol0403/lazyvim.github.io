"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9454],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var i=t(7294),a=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var i=t(7462),a=t(7294),r=t(6010),l=t(2466),o=t(6550),s=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[s,u]=f({queryString:t,groupId:i}),[d,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),v=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var v=t(2389);const h="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),i=u[t].value;i!==o&&(d(n),s(i))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function _(e){const n=g(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h)},a.createElement(y,(0,i.Z)({},e,n)),a.createElement(k,(0,i.Z)({},e,n)))}function T(e){const n=(0,v.Z)();return a.createElement(_,(0,i.Z)({key:String(n)},e))}},2385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var i=t(7462),a=(t(7294),t(3905)),r=t(4866),l=t(5162);const o={},s="UI",u={unversionedId:"plugins/ui",id:"plugins/ui",title:"UI",description:"nvim-notify",source:"@site/docs/plugins/ui.md",sourceDirName:"plugins",slug:"/plugins/ui",permalink:"/plugins/ui",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TreeSitter",permalink:"/plugins/treesitter"},next:{title:"Util",permalink:"/plugins/util"}},c={},d=[{value:"nvim-notify",id:"nvim-notify",level:2},{value:"dressing.nvim",id:"dressingnvim",level:2},{value:"bufferline.nvim",id:"bufferlinenvim",level:2},{value:"lualine.nvim",id:"lualinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"mini.indentscope",id:"miniindentscope",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"noice.nvim",id:"noicenvim",level:2},{value:"nvim-web-devicons",id:"nvim-web-devicons",level:2},{value:"nui.nvim",id:"nuinvim",level:2},{value:"dashboard-nvim",id:"dashboard-nvim",level:2},{value:"alpha-nvim <em>(optional)</em>",id:"alpha-nvim-optional",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ui"},"UI"),(0,a.kt)("h2",{id:"nvim-notify"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,a.kt)("p",null," Better ",(0,a.kt)("inlineCode",{parentName:"p"},"vim.notify()")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  timeout = 3000,\n  max_height = function()\n    return math.floor(vim.o.lines * 0.75)\n  end,\n  max_width = function()\n    return math.floor(vim.o.columns * 0.75)\n  end,\n  on_open = function(win)\n    vim.api.nvim_win_set_config(win, { zindex = 100 })\n  end,\n}\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rcarriga/nvim-notify",\n  keys = {\n    {\n      "<leader>un",\n      function()\n        require("notify").dismiss({ silent = true, pending = true })\n      end,\n      desc = "Dismiss all Notifications",\n    },\n  },\n  opts = {\n    timeout = 3000,\n    max_height = function()\n      return math.floor(vim.o.lines * 0.75)\n    end,\n    max_width = function()\n      return math.floor(vim.o.columns * 0.75)\n    end,\n    on_open = function(win)\n      vim.api.nvim_win_set_config(win, { zindex = 100 })\n    end,\n  },\n  init = function()\n    -- when noice is not enabled, install notify on VeryLazy\n    if not Util.has("noice.nvim") then\n      Util.on_very_lazy(function()\n        vim.notify = require("notify")\n      end)\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"dressingnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/dressing.nvim"},"dressing.nvim")),(0,a.kt)("p",null," better vim.ui"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/dressing.nvim",\n  lazy = true,\n  init = function()\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.select = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.select(...)\n    end\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.input = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.input(...)\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"bufferlinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/bufferline.nvim"},"bufferline.nvim")),(0,a.kt)("p",null," This is what powers LazyVim's fancy-looking\ntabs, which include filetype icons and close buttons."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    -- stylua: ignore\n    close_command = function(n) require("mini.bufremove").delete(n, false) end,\n    -- stylua: ignore\n    right_mouse_command = function(n) require("mini.bufremove").delete(n, false) end,\n    diagnostics = "nvim_lsp",\n    always_show_bufferline = false,\n    diagnostics_indicator = function(_, _, diag)\n      local icons = require("lazyvim.config").icons.diagnostics\n      local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n        .. (diag.warning and icons.Warn .. diag.warning or "")\n      return vim.trim(ret)\n    end,\n    offsets = {\n      {\n        filetype = "neo-tree",\n        text = "Neo-tree",\n        highlight = "Directory",\n        text_align = "left",\n      },\n    },\n  },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/bufferline.nvim",\n  event = "VeryLazy",\n  keys = {\n    { "<leader>bp", "<Cmd>BufferLineTogglePin<CR>", desc = "Toggle pin" },\n    { "<leader>bP", "<Cmd>BufferLineGroupClose ungrouped<CR>", desc = "Delete non-pinned buffers" },\n    { "<leader>bo", "<Cmd>BufferLineCloseOthers<CR>", desc = "Delete other buffers" },\n    { "<leader>br", "<Cmd>BufferLineCloseRight<CR>", desc = "Delete buffers to the right" },\n    { "<leader>bl", "<Cmd>BufferLineCloseLeft<CR>", desc = "Delete buffers to the left" },\n    { "<S-h>", "<cmd>BufferLineCyclePrev<cr>", desc = "Prev buffer" },\n    { "<S-l>", "<cmd>BufferLineCycleNext<cr>", desc = "Next buffer" },\n    { "[b", "<cmd>BufferLineCyclePrev<cr>", desc = "Prev buffer" },\n    { "]b", "<cmd>BufferLineCycleNext<cr>", desc = "Next buffer" },\n  },\n  opts = {\n    options = {\n      -- stylua: ignore\n      close_command = function(n) require("mini.bufremove").delete(n, false) end,\n      -- stylua: ignore\n      right_mouse_command = function(n) require("mini.bufremove").delete(n, false) end,\n      diagnostics = "nvim_lsp",\n      always_show_bufferline = false,\n      diagnostics_indicator = function(_, _, diag)\n        local icons = require("lazyvim.config").icons.diagnostics\n        local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n          .. (diag.warning and icons.Warn .. diag.warning or "")\n        return vim.trim(ret)\n      end,\n      offsets = {\n        {\n          filetype = "neo-tree",\n          text = "Neo-tree",\n          highlight = "Directory",\n          text_align = "left",\n        },\n      },\n    },\n  },\n  config = function(_, opts)\n    require("bufferline").setup(opts)\n    -- Fix bufferline when restoring a session\n    vim.api.nvim_create_autocmd("BufAdd", {\n      callback = function()\n        vim.schedule(function()\n          pcall(nvim_bufferline)\n        end)\n      end,\n    })\n  end,\n}\n')))),(0,a.kt)("h2",{id:"lualinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,a.kt)("p",null," statusline"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  -- PERF: we don\'t need this lualine require madness \ud83e\udd37\n  local lualine_require = require("lualine_require")\n  lualine_require.require = require\n\n  local icons = require("lazyvim.config").icons\n\n  vim.o.laststatus = vim.g.lualine_laststatus\n\n  return {\n    options = {\n      theme = "auto",\n      globalstatus = true,\n      disabled_filetypes = { statusline = { "dashboard", "alpha", "starter" } },\n    },\n    sections = {\n      lualine_a = { "mode" },\n      lualine_b = { "branch" },\n\n      lualine_c = {\n        Util.lualine.root_dir(),\n        {\n          "diagnostics",\n          symbols = {\n            error = icons.diagnostics.Error,\n            warn = icons.diagnostics.Warn,\n            info = icons.diagnostics.Info,\n            hint = icons.diagnostics.Hint,\n          },\n        },\n        { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n        { Util.lualine.pretty_path() },\n      },\n      lualine_x = {\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.command.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n          color = Util.ui.fg("Statement"),\n        },\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.mode.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n          color = Util.ui.fg("Constant"),\n        },\n        -- stylua: ignore\n        {\n          function() return "\uf46f  " .. require("dap").status() end,\n          cond = function () return package.loaded["dap"] and require("dap").status() ~= "" end,\n          color = Util.ui.fg("Debug"),\n        },\n        {\n          require("lazy.status").updates,\n          cond = require("lazy.status").has_updates,\n          color = Util.ui.fg("Special"),\n        },\n        {\n          "diff",\n          symbols = {\n            added = icons.git.added,\n            modified = icons.git.modified,\n            removed = icons.git.removed,\n          },\n          source = function()\n            local gitsigns = vim.b.gitsigns_status_dict\n            if gitsigns then\n              return {\n                added = gitsigns.added,\n                modified = gitsigns.changed,\n                removed = gitsigns.removed,\n              }\n            end\n          end,\n        },\n      },\n      lualine_y = {\n        { "progress", separator = " ", padding = { left = 1, right = 0 } },\n        { "location", padding = { left = 0, right = 1 } },\n      },\n      lualine_z = {\n        function()\n          return "\uf43a " .. os.date("%R")\n        end,\n      },\n    },\n    extensions = { "neo-tree", "lazy" },\n  }\nend\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  event = "VeryLazy",\n  init = function()\n    vim.g.lualine_laststatus = vim.o.laststatus\n    if vim.fn.argc(-1) > 0 then\n      -- set an empty statusline till lualine loads\n      vim.o.statusline = " "\n    else\n      -- hide the statusline on the starter page\n      vim.o.laststatus = 0\n    end\n  end,\n  opts = function()\n    -- PERF: we don\'t need this lualine require madness \ud83e\udd37\n    local lualine_require = require("lualine_require")\n    lualine_require.require = require\n\n    local icons = require("lazyvim.config").icons\n\n    vim.o.laststatus = vim.g.lualine_laststatus\n\n    return {\n      options = {\n        theme = "auto",\n        globalstatus = true,\n        disabled_filetypes = { statusline = { "dashboard", "alpha", "starter" } },\n      },\n      sections = {\n        lualine_a = { "mode" },\n        lualine_b = { "branch" },\n\n        lualine_c = {\n          Util.lualine.root_dir(),\n          {\n            "diagnostics",\n            symbols = {\n              error = icons.diagnostics.Error,\n              warn = icons.diagnostics.Warn,\n              info = icons.diagnostics.Info,\n              hint = icons.diagnostics.Hint,\n            },\n          },\n          { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n          { Util.lualine.pretty_path() },\n        },\n        lualine_x = {\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.command.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n            color = Util.ui.fg("Statement"),\n          },\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.mode.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n            color = Util.ui.fg("Constant"),\n          },\n          -- stylua: ignore\n          {\n            function() return "\uf46f  " .. require("dap").status() end,\n            cond = function () return package.loaded["dap"] and require("dap").status() ~= "" end,\n            color = Util.ui.fg("Debug"),\n          },\n          {\n            require("lazy.status").updates,\n            cond = require("lazy.status").has_updates,\n            color = Util.ui.fg("Special"),\n          },\n          {\n            "diff",\n            symbols = {\n              added = icons.git.added,\n              modified = icons.git.modified,\n              removed = icons.git.removed,\n            },\n            source = function()\n              local gitsigns = vim.b.gitsigns_status_dict\n              if gitsigns then\n                return {\n                  added = gitsigns.added,\n                  modified = gitsigns.changed,\n                  removed = gitsigns.removed,\n                }\n              end\n            end,\n          },\n        },\n        lualine_y = {\n          { "progress", separator = " ", padding = { left = 1, right = 0 } },\n          { "location", padding = { left = 0, right = 1 } },\n        },\n        lualine_z = {\n          function()\n            return "\uf43a " .. os.date("%R")\n          end,\n        },\n      },\n      extensions = { "neo-tree", "lazy" },\n    }\n  end,\n}\n')))),(0,a.kt)("h2",{id:"indent-blanklinenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,a.kt)("p",null," indent guides for Neovim"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  indent = {\n    char = "\u2502",\n    tab_char = "\u2502",\n  },\n  scope = { enabled = false },\n  exclude = {\n    filetypes = {\n      "help",\n      "alpha",\n      "dashboard",\n      "neo-tree",\n      "Trouble",\n      "trouble",\n      "lazy",\n      "mason",\n      "notify",\n      "toggleterm",\n      "lazyterm",\n    },\n  },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lukas-reineke/indent-blankline.nvim",\n  event = "LazyFile",\n  opts = {\n    indent = {\n      char = "\u2502",\n      tab_char = "\u2502",\n    },\n    scope = { enabled = false },\n    exclude = {\n      filetypes = {\n        "help",\n        "alpha",\n        "dashboard",\n        "neo-tree",\n        "Trouble",\n        "trouble",\n        "lazy",\n        "mason",\n        "notify",\n        "toggleterm",\n        "lazyterm",\n      },\n    },\n  },\n  main = "ibl",\n}\n')))),(0,a.kt)("h2",{id:"miniindentscope"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.indentscope"},"mini.indentscope")),(0,a.kt)("p",null," Active indent guide and indent text objects. When you're browsing\ncode, this highlights the current level of indentation, and animates\nthe highlighting."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- symbol = "\u258f",\n  symbol = "\u2502",\n  options = { try_as_border = true },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.indentscope",\n  version = false, -- wait till new 0.7.0 release to put it back on semver\n  event = "LazyFile",\n  opts = {\n    -- symbol = "\u258f",\n    symbol = "\u2502",\n    options = { try_as_border = true },\n  },\n  init = function()\n    vim.api.nvim_create_autocmd("FileType", {\n      pattern = {\n        "help",\n        "alpha",\n        "dashboard",\n        "neo-tree",\n        "Trouble",\n        "trouble",\n        "lazy",\n        "mason",\n        "notify",\n        "toggleterm",\n        "lazyterm",\n      },\n      callback = function()\n        vim.b.miniindentscope_disable = true\n      end,\n    })\n  end,\n}\n')))),(0,a.kt)("h2",{id:"which-keynvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,a.kt)("p",null," Displays a popup with possible key bindings of the command you started typing"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if require("lazyvim.util").has("noice.nvim") then\n    opts.defaults["<leader>sn"] = { name = "+noice" }\n  end\nend\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/which-key.nvim",\n  opts = function(_, opts)\n    if require("lazyvim.util").has("noice.nvim") then\n      opts.defaults["<leader>sn"] = { name = "+noice" }\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"noicenvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/folke/noice.nvim"},"noice.nvim")),(0,a.kt)("p",null," Highly experimental plugin that completely replaces the UI for messages, cmdline and the popupmenu."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  lsp = {\n    override = {\n      ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n      ["vim.lsp.util.stylize_markdown"] = true,\n      ["cmp.entry.get_documentation"] = true,\n    },\n  },\n  routes = {\n    {\n      filter = {\n        event = "msg_show",\n        any = {\n          { find = "%d+L, %d+B" },\n          { find = "; after #%d+" },\n          { find = "; before #%d+" },\n        },\n      },\n      view = "mini",\n    },\n  },\n  presets = {\n    bottom_search = true,\n    command_palette = true,\n    long_message_to_split = true,\n    inc_rename = true,\n  },\n}\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/noice.nvim",\n  event = "VeryLazy",\n  opts = {\n    lsp = {\n      override = {\n        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n        ["vim.lsp.util.stylize_markdown"] = true,\n        ["cmp.entry.get_documentation"] = true,\n      },\n    },\n    routes = {\n      {\n        filter = {\n          event = "msg_show",\n          any = {\n            { find = "%d+L, %d+B" },\n            { find = "; after #%d+" },\n            { find = "; before #%d+" },\n          },\n        },\n        view = "mini",\n      },\n    },\n    presets = {\n      bottom_search = true,\n      command_palette = true,\n      long_message_to_split = true,\n      inc_rename = true,\n    },\n  },\n  -- stylua: ignore\n  keys = {\n    { "<S-Enter>", function() require("noice").redirect(vim.fn.getcmdline()) end, mode = "c", desc = "Redirect Cmdline" },\n    { "<leader>snl", function() require("noice").cmd("last") end, desc = "Noice Last Message" },\n    { "<leader>snh", function() require("noice").cmd("history") end, desc = "Noice History" },\n    { "<leader>sna", function() require("noice").cmd("all") end, desc = "Noice All" },\n    { "<leader>snd", function() require("noice").cmd("dismiss") end, desc = "Dismiss All" },\n    { "<c-f>", function() if not require("noice.lsp").scroll(4) then return "<c-f>" end end, silent = true, expr = true, desc = "Scroll forward", mode = {"i", "n", "s"} },\n    { "<c-b>", function() if not require("noice.lsp").scroll(-4) then return "<c-b>" end end, silent = true, expr = true, desc = "Scroll backward", mode = {"i", "n", "s"}},\n  },\n}\n')))),(0,a.kt)("h2",{id:"nvim-web-devicons"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-tree/nvim-web-devicons"},"nvim-web-devicons")),(0,a.kt)("p",null," icons"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-tree/nvim-web-devicons", lazy = true }\n')))),(0,a.kt)("h2",{id:"nuinvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/MunifTanjim/nui.nvim"},"nui.nvim")),(0,a.kt)("p",null," ui components"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{ "MunifTanjim/nui.nvim", lazy = true }\n')))),(0,a.kt)("h2",{id:"dashboard-nvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvimdev/dashboard-nvim"},"dashboard-nvim")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n  ]]\n\n  logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n  local opts = {\n    theme = "doom",\n    hide = {\n      -- this is taken care of by lualine\n      -- enabling this messes up the actual laststatus setting after loading a file\n      statusline = false,\n    },\n    config = {\n      header = vim.split(logo, "\\n"),\n      -- stylua: ignore\n      center = {\n        { action = "Telescope find_files",                                     desc = " Find file",       icon = "\uf002 ", key = "f" },\n        { action = "ene | startinsert",                                        desc = " New file",        icon = "\uf15b ", key = "n" },\n        { action = "Telescope oldfiles",                                       desc = " Recent files",    icon = "\uf0c5 ", key = "r" },\n        { action = "Telescope live_grep",                                      desc = " Find text",       icon = "\uf022 ", key = "g" },\n        { action = [[lua require("lazyvim.util").telescope.config_files()()]], desc = " Config",          icon = "\uf423 ", key = "c" },\n        { action = \'lua require("persistence").load()\',                        desc = " Restore Session", icon = "\ue348 ", key = "s" },\n        { action = "LazyExtras",                                               desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n        { action = "Lazy",                                                     desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n        { action = "qa",                                                       desc = " Quit",            icon = "\uf426 ", key = "q" },\n      },\n      footer = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n      end,\n    },\n  }\n\n  for _, button in ipairs(opts.config.center) do\n    button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n    button.key_format = "  %s"\n  end\n\n  -- close Lazy and re-open when the dashboard is ready\n  if vim.o.filetype == "lazy" then\n    vim.cmd.close()\n    vim.api.nvim_create_autocmd("User", {\n      pattern = "DashboardLoaded",\n      callback = function()\n        require("lazy").show()\n      end,\n    })\n  end\n\n  return opts\nend\n'))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvimdev/dashboard-nvim",\n  event = "VimEnter",\n  opts = function()\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551           \n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d           \n    ]]\n\n    logo = string.rep("\\n", 8) .. logo .. "\\n\\n"\n\n    local opts = {\n      theme = "doom",\n      hide = {\n        -- this is taken care of by lualine\n        -- enabling this messes up the actual laststatus setting after loading a file\n        statusline = false,\n      },\n      config = {\n        header = vim.split(logo, "\\n"),\n        -- stylua: ignore\n        center = {\n          { action = "Telescope find_files",                                     desc = " Find file",       icon = "\uf002 ", key = "f" },\n          { action = "ene | startinsert",                                        desc = " New file",        icon = "\uf15b ", key = "n" },\n          { action = "Telescope oldfiles",                                       desc = " Recent files",    icon = "\uf0c5 ", key = "r" },\n          { action = "Telescope live_grep",                                      desc = " Find text",       icon = "\uf022 ", key = "g" },\n          { action = [[lua require("lazyvim.util").telescope.config_files()()]], desc = " Config",          icon = "\uf423 ", key = "c" },\n          { action = \'lua require("persistence").load()\',                        desc = " Restore Session", icon = "\ue348 ", key = "s" },\n          { action = "LazyExtras",                                               desc = " Lazy Extras",     icon = "\uea8c ", key = "x" },\n          { action = "Lazy",                                                     desc = " Lazy",            icon = "\udb81\udcb2 ", key = "l" },\n          { action = "qa",                                                       desc = " Quit",            icon = "\uf426 ", key = "q" },\n        },\n        footer = function()\n          local stats = require("lazy").stats()\n          local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n          return { "\u26a1 Neovim loaded " .. stats.loaded .. "/" .. stats.count .. " plugins in " .. ms .. "ms" }\n        end,\n      },\n    }\n\n    for _, button in ipairs(opts.config.center) do\n      button.desc = button.desc .. string.rep(" ", 43 - #button.desc)\n      button.key_format = "  %s"\n    end\n\n    -- close Lazy and re-open when the dashboard is ready\n    if vim.o.filetype == "lazy" then\n      vim.cmd.close()\n      vim.api.nvim_create_autocmd("User", {\n        pattern = "DashboardLoaded",\n        callback = function()\n          require("lazy").show()\n        end,\n      })\n    end\n\n    return opts\n  end,\n}\n')))),(0,a.kt)("h2",{id:"alpha-nvim-optional"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")," ",(0,a.kt)("em",{parentName:"h2"},"(optional)")),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "goolord/alpha-nvim",\n  optional = true,\n  enabled = function()\n    require("lazyvim.util").warn({\n      "`dashboard.nvim` is now the default LazyVim starter plugin.",\n      "",\n      "To keep using `alpha.nvim`, please enable the `lazyvim.plugins.extras.ui.alpha` extra.",\n      "Or to hide this message, remove the alpha spec from your config.",\n    })\n    return false\n  end,\n}\n')))))}p.isMDXComponent=!0}}]);