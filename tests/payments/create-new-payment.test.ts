import createNewPayment from "../../src/sdk/payments/create-new-payment";

describe("createNewPayment", () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch as unknown as typeof fetch;

  const validBody = {
    dueDate: "2023-12-31",
    value: 100,
    customer: "customer-id",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should throw an error if dueDate is not a string", async () => {
    const body = { ...(validBody as any), dueDate: 12345 };
    await expect(
      createNewPayment(
        { baseURL: "https", apiKey: "XXXXXX", version: "v3" },
        body as any as any
      )
    ).rejects.toThrowError("Failed to create a new payment.");
  });

  it("should throw an error if dueDate is not in YYYY-MM-DD format", async () => {
    const body = { ...(validBody as any), dueDate: "31-12-2023" };
    await expect(
      createNewPayment(
        { baseURL: "https", apiKey: "XXXXXX", version: "v3" },
        body as any
      )
    ).rejects.toThrowError("Failed to create a new payment.");
  });

  it("should throw an error if dueDate is an invalid date", async () => {
    const body = { ...(validBody as any), dueDate: "2023-02-30" };
    await expect(
      createNewPayment(
        { baseURL: "https", apiKey: "XXXXXX", version: "v3" },
        body as any
      )
    ).rejects.toThrowError("Failed to create a new payment.");
  });

  it("should throw an error if dueDate is in the past", async () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    const body = {
      ...(validBody as any),
      dueDate: pastDate.toISOString().split("T")[0],
    };
    await expect(
      createNewPayment(
        { baseURL: "https", apiKey: "XXXXXX", version: "v3" },
        body as any
      )
    ).rejects.toThrowError("Failed to create a new payment.");
  });

  it("should return a successful response", async () => {
    const mockResponse = { id: "payment-id", status: "PENDING" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const today = new Date();

    const result = await createNewPayment(
      { baseURL: "https", apiKey: "XXXXXX", version: "v3" },
      {
        ...validBody,
        dueDate: `${today.getFullYear()}-${
          today.getMonth() + 1 < 10
            ? `0${today.getMonth() + 1}`
            : today.getMonth() + 1
        }-${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}`,
      }
    );
    expect(result).toEqual(mockResponse);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
