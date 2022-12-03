const faqData = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
      id: 2,
      question: "What do we do?",
      answer:
        "Building learning communities with Our Affordable & Competent Courses",
    },
    {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!",
    },
  ];
  
  const accordianBody = document.querySelector('.accordian_body');
  // console.log(accordianBody);

  const faqs = [];
  // faqData.forEach(e => console.log(e.id));
  faqData.forEach(e => faqs.push(e.id));
  // console.log(faqs);
  
  function showFaq(x) {
    let para = document.querySelector(`.p${x}`)
    para.classList.contains('hidden') ? para.classList.remove('hidden') : para.classList.add('hidden');
  }
  
  // function createFaq() {
    
  // }
  
  // function btnStatusUpdate() {
    
  // }
  
  
  