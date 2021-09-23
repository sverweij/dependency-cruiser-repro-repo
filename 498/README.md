Minimal repro repo for https://github.com/sverweij/dependency-cruiser/issues/498


- `npm run depcruise` - runs a cruise, ignoring known violations; expected to output no violations
- `npm run depcruise:all` - runs a cruise, _heeding_ all violations
