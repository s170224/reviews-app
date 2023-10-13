import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightClick = () => {
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
    console.log(index)
  }

  onLeftClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  render() {
    const {index} = this.state
    const details = reviewsList[index]
    console.log(details)
    console.log(index)

    return (
      <div className="bg-container">
        <div>
          <h1>Reviews</h1>
        </div>
        <div className="container">
          <button
            type="button"
            className="button"
            onClick={this.onLeftClick}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="details-container">
            <img src={details.imgUrl} alt={details.username} />
            <p>{details.username}</p>
            <p>{details.companyName}</p>
            <p>{details.description}</p>
          </div>
          <button
            type="button"
            onClick={this.onRightClick}
            data-testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
