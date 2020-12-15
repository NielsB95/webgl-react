import { Vector3 } from "./vector3";

describe("Defaults", () => {
    test("X, Y & Z are 0 when not value is provided", () => {
        // Arrange
        var value = new Vector3();

        // Act & Assert
        expect(value.X).toBe(0);
        expect(value.Y).toBe(0);
        expect(value.Z).toBe(0);
    });
});

describe("Add", () => {
    test("with other", () => {
        // Arrange
        var main = new Vector3(2, 4, 6);
        var other = new Vector3(12, 14, 16);

        // Act
        main.Add(other);

        // Assert
        expect(main.X).toBe(14);
        expect(main.Y).toBe(18);
        expect(main.Z).toBe(22);
    });

    test("does nothing when other is undefined", () => {
        // Arrange
        var main = new Vector3(2, 4, 6);
        var other = new Vector3(undefined, undefined, undefined);

        // Act
        main.Add(other);

        // Assert
        expect(main.X).toBe(2);
        expect(main.Y).toBe(4);
        expect(main.Z).toBe(6);
    });
});

describe("Subtract", () => {
    test("with other", () => {
        // Arrange
        var main = new Vector3(13, 16, 19);
        var other = new Vector3(2, 4, 6);

        // Act
        main.Subtract(other);

        // Assert
        expect(main.X).toBe(11);
        expect(main.Y).toBe(12);
        expect(main.Z).toBe(13);
    });

    test("does nothing when other is undefined", () => {
        // Arrange
        var main = new Vector3(2, 4, 6);
        var other = new Vector3(undefined, undefined, undefined);

        // Act
        main.Subtract(other);

        // Assert
        expect(main.X).toBe(2);
        expect(main.Y).toBe(4);
        expect(main.Z).toBe(6);
    });
});