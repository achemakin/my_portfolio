import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.contacts__name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Длина имени должна быть больше 2 символов'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.contacts__tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.contacts__email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.js-form', rules, afterForm);

