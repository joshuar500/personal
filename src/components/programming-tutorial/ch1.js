import React, { useState } from 'react';

export const ChapterOne = () => {
  const [people, setPeople] = useState({
    vacuuming: 'Josh',
    laundry: '',
    dishes: '',
    dusting: '',
  });

  const [unknownVariable, setUnknownVariable] = useState('');
  const [chore, setChore] = useState('');

  const handleInputChange = type => e => {
    console.log('type', type);
    console.log(e.target.value);
    console.log('people', people);
    setPeople({ ...people, [type]: e.target.value });
  };

  const handleUnknownVariable = e => {
    setUnknownVariable(e.target.value);
  };

  const handleSetChore = e => {
    setChore(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={people.vacuuming} readOnly />
        <code> = "vacuuming"</code>
      </div>
      <p>
        In this case, I am "vacuuming". It sucks, and I don't want to, and Mom
        hasn't even told me how many times I have to vacuum yet, I just know
        that JOSH-EQUALS-VACUUMING.
      </p>
      <p>
        With computers, we have <strong>things</strong> called{' '}
        <code>variables</code> which help explain what that{' '}
        <strong>thing is</strong>. The fact that <code>josh = "vacuuming"</code>{' '}
        is a totally legit programming statement and the computer will be able
        to read it. What it tells the computer is that we have a variable named{' '}
        <code>josh</code> and it is equal to <code>"vacuuming"</code>.
      </p>
      <p>
        Another big takeaway is that thing josh is equal to "vacuuming" which is
        in quotes! This is because the variable can only be equal to certain
        things. In this case it is set to something that is called a{' '}
        <strong>String</strong>. No, no, not that kind of string. A{' '}
        <strong>String</strong> in programming is just another classy word for
        "word" or "sentence". To just repeat this once more: anything inside
        quotes are just words or sentences. But it doesn't end there. Variables
        can be set to Numbers and do math as well! But we'll get there. Let's
        get back to our chores example.
      </p>
      <p>
        Mom still hasn't finished her list. She has like 5 more kids that need
        to help with laundry, dishes, dusting, pull weeds, the whole house.
      </p>
      <p>
        Here's where you get to help mom finish up her list. In the field below,
        add your name and everybody else who needs to help out. You already know
        what your chores are. There's also a <strong>value</strong> missing. Try
        and figure out what I mean by <strong>value</strong>, but in case you
        get stuck, there is a hint as to what all the chores are in the
        paragraph above.
      </p>
      <div>
        <input
          type="text"
          value={people.laundry}
          onChange={handleInputChange('laundry')}
        />
        <code> = "laundry"</code>
      </div>
      <div>
        <input
          type="text"
          value={people.dishes}
          onChange={handleInputChange('dishes')}
        />
        <code> = "dishes"</code>
      </div>
      <div>
        <input
          type="text"
          value={people.dusting}
          onChange={handleInputChange('dusting')}
        />
        <code> = "dusting"</code>
      </div>
      <div>
        <input
          type="text"
          value={unknownVariable}
          onChange={handleUnknownVariable}
        />
        <code> = " </code>
        <input
          type="text"
          style={{
            backgroundColor: '#b9b9b9',
            fontSize: '90%',
            color: '#4e4e4e',
          }}
          value={chore}
          onChange={handleSetChore}
        />
        <code>"</code>
      </div>
      <p>
        And the results of you filling these variables in (and the missing value
        for the last variable):
      </p>
      <pre>
        <code>
          {`${people.vacuuming} = "vacuuming"
${people.laundry} = "laundry"
${people.dishes} = "dishes"
${people.dusting} = "dusting"
${unknownVariable} = "${chore}"`}
        </code>
      </pre>
    </div>
  );
};
