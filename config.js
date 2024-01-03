/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "SET YOUR COOKIE HERE",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 3,
  CookieIndex: 0,
  ProxyPassword: "x18927992328",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "",
  api_rProxy: "",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
