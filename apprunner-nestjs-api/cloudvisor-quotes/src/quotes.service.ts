import { Injectable } from '@nestjs/common';

const quotes = [
  "We are an advanced-tier AWS partner helping startups across the globe get the most out of AWS. AWS is one-half of our company’s DNA. The other one is startups.",
  "Cloudvisor’s Resell is free to join and so are the benefits listed below. Our team has the knowledge, certifications, and expertise to make your startup thrive, getting more from AWS for less money spent. Register today and get access to instant discounts, free consulting, and AWS Credits.",
  "Concerned about migration to AWS will be a headache? Don’t be! We have significant experience in AWS migration and understand the complexity of adopting a new cloud services solution. Our team can handle the whole process for you, from start to finish.",
  "We have helped more than 300 companies like yours to get the most out of AWS and give their business the foundation it needs. Get in touch for a tailored consultation and find out how we can help you.",
  "Ensure that your AWS infrastructure is always highly available and running smoothly with an AWS Well-Architected Framework Review.",
  "This enables you to sleep soundly, knowing that your business is doing everything it can to make the most of its cloud services solution."
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

@Injectable()
export class AppService {
  getRandomQuote(): { quote: string } {
    const quote = quotes[getRandomInt(quotes.length)]
    return {"quote": quote};
  }
}
