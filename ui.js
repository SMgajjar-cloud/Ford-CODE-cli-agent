/**
 * FORD CODE — Terminal UI & ANSI Theme Engine
 * Ultra-fast zero-dependency ANSI formatting and ASCII graphics
 */

export const colors = {
  reset: '\x1b[0m',
  bold: (t) => `\x1b[1m${t}\x1b[0m`,
  dim: (t) => `\x1b[2m${t}\x1b[0m`,
  italic: (t) => `\x1b[3m${t}\x1b[0m`,
  underline: (t) => `\x1b[4m${t}\x1b[0m`,

  // Colors
  blue: (t) => `\x1b[38;5;39m${t}\x1b[0m`,
  cyan: (t) => `\x1b[38;5;51m${t}\x1b[0m`,
  cyanBold: (t) => `\x1b[1;38;5;51m${t}\x1b[0m`,
  white: (t) => `\x1b[38;5;255m${t}\x1b[0m`,
  whiteBold: (t) => `\x1b[1;38;5;255m${t}\x1b[0m`,
  gray: (t) => `\x1b[38;5;244m${t}\x1b[0m`,
  darkGray: (t) => `\x1b[38;5;238m${t}\x1b[0m`,
  green: (t) => `\x1b[38;5;48m${t}\x1b[0m`,
  yellow: (t) => `\x1b[38;5;220m${t}\x1b[0m`,
  red: (t) => `\x1b[38;5;196m${t}\x1b[0m`,
  magenta: (t) => `\x1b[38;5;201m${t}\x1b[0m`,
  glow: (t) => `\x1b[38;5;45m${t}\x1b[0m`,

  // Formatting helpers
  boldText: (t) => `\x1b[1m${t}\x1b[0m`,
  dimText: (t) => `\x1b[2m${t}\x1b[0m`,
  accent: (t) => `\x1b[38;5;39m${t}\x1b[0m`,
  accentBold: (t) => `\x1b[1;38;5;39m${t}\x1b[0m`,
  success: (t) => `\x1b[38;5;48m${t}\x1b[0m`,
  successBold: (t) => `\x1b[1;38;5;48m${t}\x1b[0m`,
  warning: (t) => `\x1b[38;5;220m${t}\x1b[0m`,
  warningBold: (t) => `\x1b[1;38;5;220m${t}\x1b[0m`,
  error: (t) => `\x1b[38;5;196m${t}\x1b[0m`,
  errorBold: (t) => `\x1b[1;38;5;196m${t}\x1b[0m`,
  glowText: (t) => `\x1b[1;38;5;45m${t}\x1b[0m`,
  border: (t) => `\x1b[38;5;24m${t}\x1b[0m`,
};

export function getFordLogo() {
  return colors.accent(`
              .────────────────────────────────────────────.              
         .───'  ╭────────────────────────────────────────╮  '───.         
      .──'   ╭──╯                                        ╰──╮   '──.      
    .─'    ╭─╯                                              ╰─╮    '─.    
  /\`    │                 ______                                 │    \`\\  
 |      │                (_) |                |                  │      | 
 |      │                   _|_  __   ,_    __|                  │      | 
 |      │                  / | |/  \\_/  |  /  |                  │      | 
  \\_    │                 (_/   \\__/    |_/\\_/|_/                │    _/  
    \`─.    ╰─╮                                              ╭─╯    .─'    
      \`──.   ╰──╮                                        ╭──╯   .──'      
         '───.  ╰────────────────────────────────────────╯  .───'         
              '────────────────────────────────────────────'              
`);
}

export function drawBox(lines) {
  const width = 72;
  console.log(colors.border(`╭${'─'.repeat(width)}╮`));
  for (const line of lines) {
    console.log(colors.border(`│ `) + line.padEnd(width - 2) + colors.border(`│`));
  }
  console.log(colors.border(`╰${'─'.repeat(width)}╯\n`));
}
