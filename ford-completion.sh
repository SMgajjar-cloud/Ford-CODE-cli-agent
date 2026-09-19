# Bash & Zsh autocompletion for FORD CODE

_ford_completions() {
  local cur prev commands
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"

  commands="code chat doctor status model web plan version help init git:status git:diff git:commit test:run test:fix file:diff file:undo security:scan"

  if [ $COMP_CWORD -eq 1 ]; then
    COMPREPLY=( $(compgen -W "${commands}" -- ${cur}) )
    return 0
  fi

  if [ "$prev" = "model" ]; then
    local models="mustang-gt f150-lightning gt-supercar mach-e bronco-raptor explorer-ev"
    COMPREPLY=( $(compgen -W "${models}" -- ${cur}) )
    return 0
  fi
}

complete -F _ford_completions ford
complete -F _ford_completions ford-code
