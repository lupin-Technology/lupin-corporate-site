#!/bin/bash

commit_msg_file="$1"
commit_msg=$(head -n 1 "$commit_msg_file")

# Merge コミットはスキップ
if echo "$commit_msg" | grep -qE '^Merge '; then
  exit 0
fi

# Revert コミットはスキップ
if echo "$commit_msg" | grep -qE '^Revert '; then
  exit 0
fi

# fixup / squash / amend コミットはスキップ
if echo "$commit_msg" | grep -qE '^(fixup|squash|amend)! '; then
  exit 0
fi

# prefix 形式を検証
# type: description または type(scope): description
pattern='^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?: .+'

if ! echo "$commit_msg" | grep -qE "$pattern"; then
  echo "❌ コミットメッセージに正しい prefix がありません。"
  echo ""
  echo "正しい形式:"
  echo "  type: description"
  echo "  type(scope): description"
  echo ""
  echo "使用可能な type:"
  echo "  feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert"
  echo ""
  echo "例:"
  echo "  feat: ユーザー認証機能を追加"
  echo "  fix(auth): ログインエラーを修正"
  echo "  docs: READMEを更新"
  exit 1
fi
