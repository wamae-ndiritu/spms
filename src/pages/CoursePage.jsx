const CoursePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold  ">Courses</h2>
      <section className='h-screen grid md:grid-cols-5 flex justify-between'>
      <div className="col-span-3 bg-gray-100 px-6px m-2" >
        <h4 className="flex justify-center">2024/2</h4>
        <table className="w-full border">
          <thead className="">
            <tr className="text-left">
              <th className="border border-gray-300 p-2" >ID</th>
              <th className="border border-gray-300 p-2">Course Code</th>
              <th className="border border-gray=300 p-2">Course Name</th>
              <th className="border border-gray-300 p-2" >Exam Type</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">ICS 215</td>
              <td className="border border-gray-300 p-2">Object Orienred</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">Supplemtary</td>
            </tr>            <tr>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">SMA 128</td>
              <td className="border border-gray-300 p-2"> Discrete Math</td>
              <td className="border border-gray-300 p-2">Supplemtary</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">4</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">5</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">6</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">Supplemtary</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">7</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">8</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">9</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">10</td>
              <td className="border border-gray-300 p-2">ICS 350</td>
              <td className="border border-gray-300 p-2"> Calculus 1</td>
              <td className="border border-gray-300 p-2">First Attempt</td>
            </tr>
          </tbody>
        </table>
      </div>
      </section>
      {/* <form className="col-span-2 bg-gray-100 "> */}
        {/* <h2 className="text-xl font-bold"> Register New Course</h2> */}
      {/* </form> */}
    </div>
  )
}

// export default CoursePages