import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';
import {Link} from 'react-router-dom';

describe('Component TripSummary', () => {
  it('should render correct link address', () => {
    const id = 'abc';
    const expectedLink = '/trip/' + id;
    const component = shallow(<TripSummary id={id} tags={[]} days={0} name={''} cost={'0'} image={''} />);

    expect(component.find(Link).prop('to')).toEqual(expectedLink);

    console.log(component.debug());
  });

  it('should render correct image', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary id={0} tags={[]} days={0} cost={'0'} image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '123';
    const expectedDays = 12;
    const component = shallow(<TripSummary id={0} tags={[]} image={''} name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(expectedDays + ' days');
    expect(component.find('.details span').at(1).text()).toEqual('from ' + expectedCost);
  });

  it('should render tags array', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id={0} image={''} name={''} cost={'0'} days={0} tags={expectedTags} />);

    const firstTag = component.find('.tags span').at(0).text();
    const secondTag = component.find('.tags span').at(1).text();
    const thirdTag = component.find('.tags span').at(2).text();

    expect(firstTag).toEqual(expectedTags[0]);
    expect(secondTag).toEqual(expectedTags[1]);
    expect(thirdTag).toEqual(expectedTags[2]);
  });

  it('should render props tags only if array contains tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id={0} image={''} name={''} cost={'0'} days={0} tags={expectedTags} />);

    const renderedTags = component.find('.tags');
    expect(renderedTags).toBeTruthy();
  });
});
