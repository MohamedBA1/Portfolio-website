$files = Get-ChildItem -Path "d:\cv\Portfolio website\src" -Recurse -Include *.tsx,*.ts

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    $replacements = @(
        @{ regex = '(?<!dark:)bg-zinc-950'; replacement = 'bg-zinc-50 dark:bg-zinc-950' },
        @{ regex = '(?<!dark:)bg-zinc-900'; replacement = 'bg-white dark:bg-zinc-900' },
        @{ regex = '(?<!dark:)text-zinc-100'; replacement = 'text-zinc-900 dark:text-zinc-100' },
        @{ regex = '(?<!dark:)text-zinc-400'; replacement = 'text-zinc-600 dark:text-zinc-400' },
        @{ regex = '(?<!dark:)text-zinc-300'; replacement = 'text-zinc-700 dark:text-zinc-300' },
        @{ regex = '(?<!dark:)text-zinc-50'; replacement = 'text-zinc-950 dark:text-zinc-50' },
        @{ regex = '(?<!dark:)border-zinc-800'; replacement = 'border-zinc-200 dark:border-zinc-800' },
        @{ regex = '(?<!dark:)border-zinc-900/50'; replacement = 'border-zinc-200 dark:border-zinc-900/50' }
    )

    $newContent = $content
    foreach ($rep in $replacements) {
        $newContent = [System.Text.RegularExpressions.Regex]::Replace($newContent, $rep.regex, $rep.replacement)
    }

    if ($newContent -cne $content) {
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($file.FullName)"
    }
}
