// 2026.02.09 - may be some remnants of hardcoded dates, use constants with Luxon DateTime formatting whenever possible
// view Header.tsx and Schedule.tsx for examples

import { DateTime } from "luxon"

export const ITERATION = 12 as const
export const ITERATION_STRING = `${ITERATION}.0` as const
export const ITERATION_WORD = "twelfth" as const

export const START = DateTime.fromISO("2026-02-21T15:00:00")
export const END = DateTime.fromISO("2026-02-22T15:00:00")