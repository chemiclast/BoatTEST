type assertions = assertionMethods & { [index: string]: assertions };

interface assertionMethods {
	never: assertions;

	exist(this: void): void;
	exists(this: void): void;

	equal(this: void, expectedValue: unknown): void;
	equals(this: void, expectedValue: unknown): void;

	isA(this: void, expectedType: keyof CheckableTypes): void;

	fail(this: void): void;
	fails(this: void): void;
	throw(this: void): void;
	throws(this: void): void;

	match(this: void, pattern: string): void;
	matches(this: void, pattern: string): void;
}

declare function thisValue(options: unknown): assertions;

export = thisValue;
