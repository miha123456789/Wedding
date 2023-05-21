import { Component } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGPTComponent {
  sendText: string = '';
  gptText: string = '';
  loading: boolean = false;
  readonly configuration = new Configuration({
    apiKey: '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' // Replace with your actual OpenAI API key
  });
  readonly openai = new OpenAIApi(this.configuration);

  constructor() {
    const configuration = new Configuration({
      apiKey: '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' // Replace with your actual OpenAI API key
    });
    this.openai = new OpenAIApi(configuration);
  }

  getDataFromOpenAI() {
    this.loading=true;
    from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: this.sendText,
      max_tokens: 2500
    })).pipe(
      filter((resp: any) => !!resp && !!resp.data),
      map((resp: any) => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map((data: any) => data.choices[0].text)
    ).subscribe((data: any) => {
      this.gptText = data;
      this.loading=false;
    });
  }
}
