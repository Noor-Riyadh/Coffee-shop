// 1. Find all the selection cards
const cards = document.querySelectorAll(".selection-card");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    // 2. Find all cards in the SAME section (so you only pick one per row)
    const parentRow = this.closest(".row");
    const siblingCards = parentRow.querySelectorAll(".selection-card");

    // 3. Remove 'selected' from everyone in this row
    siblingCards.forEach((c) => c.classList.remove("selected"));

    // 4. Add 'selected' to the one you just clicked!
    this.classList.add("selected");
  });
});
