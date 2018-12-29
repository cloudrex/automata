import {ISavedOp} from "..";
import {PromiseOr} from "./coordinator";
import {performance} from "perf_hooks";

export interface IOperationResult {
    readonly time: number;
    readonly value: boolean | void;
}

export default class TaskRunner {
    public static async run(savedOp: ISavedOp): Promise<IOperationResult> {
        const start: number = performance.now();

        let value: PromiseOr<boolean> | PromiseOr<void> = savedOp.regardless ? true : savedOp.operation();
        let time: number = Math.round(performance.now() - start);

        if (value instanceof Promise) {
            value = await value;
            time = Math.round(performance.now() - start);
        }

        return {
            time,
            value
        };
    }
}