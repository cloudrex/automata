import {Operation, ISavedOp, CoordinatorState, GithubEvent, Action, GithubWebhookCallback, ProgressCallback, ICoordinatorRunResult, Coordinator} from "./coordinator";
import FileSystemOperations from "./predefied-ops/file-system";
import GitOperations from "./predefied-ops/git";
import ScriptOperations from "./predefied-ops/scripts";
import TestOperations from "./predefied-ops/test";

export {
    // Core
    Operation,
    ISavedOp,
    CoordinatorState,
    GithubEvent,
    Action,
    GithubWebhookCallback,
    ProgressCallback,
    ICoordinatorRunResult,
    Coordinator,

    // Pre-defined
    FileSystemOperations,
    GitOperations,
    ScriptOperations,
    TestOperations
};