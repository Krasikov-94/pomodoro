// const first = document.getElementById('first-block');
// first.scrollIntoView();
// const second = document.getElementById('second-block');
// second.scrollIntoView();
// const three = document.getElementById('three-block');
// three.scrollIntoView();
// const four = document.getElementById('four-block');
// four.scrollIntoView();

let faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
}
)
