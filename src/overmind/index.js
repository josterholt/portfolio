import {
    createStateHook,
    createActionsHook,
    createEffectsHook,
    createReactionHook,
} from 'overmind-react'
import {state} from './state'
import * as actions from './actions'

export const config = {
    state,
    actions,
}

export const useState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()
