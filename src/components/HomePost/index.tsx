import React from 'react'

const HomePost = ({children}: {children?: React.ReactNode}) => {
  return (
    <section className="section_two_wrapper">
        <div className="sections section_two">
          <h2 className="section_title text-center">What We Offer</h2>
          <ul className="homeproduct clearfix" id="_loadList">
            {children}
          </ul>
        </div>
      </section>
  )
}

export default HomePost