describe("palindrome", function() {
  it("will split the word", function() {
    expect(splitIt("word")).to.eql(["w", "o", "r", "d"]);
  });

  it("will reverse the split word array", function() {
    expect(reverseIt("word")).to.eql(["d", "r", "o", "w"]);
  });

  it("compare the original word and the new word", function() {
    expect(palindrome("tacocat")).to.equal("it is a palindrome");
  });

  it("will check if a string is a palindrome", function() {
    expect(palindrome("taco ocat")).to.equal("it is a palindrome")
  });

  it("will check if numbers are palindromes", function() {
    expect(palindrome("10001")).to.equal("it is a palindrome");
  });
});
