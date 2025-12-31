import * as Instance from "@hyperjump/json-schema/instance/experimental";

/**
 * @import { ErrorHandler, ErrorObject } from "../index.d.ts"
 */

/** @type ErrorHandler */
// eslint-disable-next-line @typescript-eslint/require-await
const additionalProperties = async (normalizedErrors, instance, localization) => {
  /** @type ErrorObject[] */
  const errors = [];
  // additionalProperties false-schema cases are handled centrally by the
  // `https://json-schema.org/validation` error handler to avoid duplicating
  // boolean-schema messaging logic across multiple handlers.
  return errors;
  return errors;
};

export default additionalProperties;
