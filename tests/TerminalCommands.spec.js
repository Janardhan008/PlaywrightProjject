
// Running tests
// npx playwright test                          # run all tests
// npx playwright test tests/example.spec.js    # run a specific file
// npx playwright test -g "login"                # run tests matching a name/title
// npx playwright test --headed                  # run with browser UI visible
// npx playwright test --debug                    # run in debug mode (step through)
// npx playwright test --ui                       # open Playwright's interactive UI mode

// Browser targeting
// npx playwright test --project=chromium
// npx playwright test --project=firefox
// npx playwright test --project=webkit

// Parallelism & retries
// npx playwright test --workers=4
// npx playwright test --retries=2

// Reporting
// npx playwright show-report          # open the last HTML report
// npx playwright test --reporter=list
// npx playwright test --reporter=html

// Setup & tooling
// npm init playwright@latest          # scaffold a new Playwright project
// npx playwright install              # install browser binaries
// npx playwright install chromium     # install just one browser
// npx playwright codegen <url>        # record actions and generate test code


// Tracing / debugging
// npx playwright test --trace on
// npx playwright show-trace trace.zip


// Other useful flags
// npx playwright test --grep-invert "skip-this"   # exclude matching tests
// npx playwright test --timeout=60000              # override test timeout (ms)
// npx playwright test --update-snapshots            # update visual snapshots