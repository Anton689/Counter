
export const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE'
export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE'
export const CHANGE_COUNTER_VALUE = 'CHANGE_COUNTER_VALUE'
export const RESET_VALUE = 'RESET_VALUE'

export const changeMinNumberValueAC = (value: number) => ({type: CHANGE_MIN_VALUE, payload: value}) as const
export type ChangeMinNumberValueACType = ReturnType<typeof changeMinNumberValueAC>

export const changeMaxNumberValueAC = (value: number) => ({type: CHANGE_MAX_VALUE, payload: value}) as const
export type ChangeMaxNumberValueACType = ReturnType<typeof changeMaxNumberValueAC>

export const changeCounterValueAC = () => ({type: CHANGE_COUNTER_VALUE}) as const
export type ChangeCounterValueACType = ReturnType<typeof changeCounterValueAC>

export const resetValueAC = () => ({type: RESET_VALUE}) as const
export type resetValueACValueACType = ReturnType<typeof resetValueAC>

export type ActionsType = ChangeMinNumberValueACType | ChangeMaxNumberValueACType | ChangeCounterValueACType | resetValueACValueACType

