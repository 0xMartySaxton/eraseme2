import { ActionBuilderArg, WorkflowActionInput } from '../builder/WorkflowBuilder'
import { ChainName, WorkflowStepCategory, WorkflowActionInfo, Asset } from '../types'

export interface AaveAction extends WorkflowActionInput {
  chain: ChainName
  inputAsset: Asset
  outputAsset: Asset
}

const aaveDataUrl =
  'data:image/png;base64,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'

export const AAVE_STAKE_ACTION: WorkflowActionInfo = {
  actionId: 'aave.stake',
  name: 'Aave Stake',
  chains: ['Ethereum'],
  gasEstimate: '20',
  exchangeFee: '1',
  category: WorkflowStepCategory.Swap,
  description: 'Provide liquidity to Aave and earn interest',
  iconUrl: aaveDataUrl,
  webSiteUrl: 'https://1inch.io',
}
export const AAVE_BORROW_ACTION: WorkflowActionInfo = {
  actionId: 'aave.borrow',
  name: 'Aave Borrow',
  chains: ['Ethereum'],
  gasEstimate: '20',
  exchangeFee: '1',
  category: WorkflowStepCategory.Swap,
  description: 'Borrow against your staked funds.',
  iconUrl: aaveDataUrl,
  webSiteUrl: 'https://1inch.io',
}

/** define a workflow step that does a token swap using Curve 3Pool */
export function aaveStake(args: AaveArgs): AaveAction {
  const rv: AaveAction = {
    id: args.id,
    actionId: 'aave.stake',
    chain: args.chain,
    amount: args.amount,
    inputAsset: new Asset(args.chain, args.token),
    outputAsset: new Asset(args.chain, args.token + 'aave'),
  }
  return rv
}
export function aaveBorrow(args: AaveArgs): AaveAction {
  const rv: AaveAction = {
    id: args.id,
    actionId: 'aave.borrow',
    chain: args.chain,
    amount: args.amount,
    inputAsset: new Asset(args.chain, args.token + 'aave'),
    outputAsset: new Asset(args.chain, args.token),
  }
  return rv
}

/**
 * Arguments for Curve workflow steps
 *  @typeParam Symbol - The allowable set of crypto symbols (as a string union)
 */
export interface AaveArgs extends ActionBuilderArg {
  chain: ChainName
  /** the token the Curve workflow step will swap from */
  token: string
}
