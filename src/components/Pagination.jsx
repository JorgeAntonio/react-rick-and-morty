function Pagination({page, setpage}) {
    let next = () => {
      if (page === 42) return
        setpage((x) => x + 1)
    }
    let prev = () => {
        if (page === 1) return 
        setpage((x) => x - 1)
    }
  return (
    <div className="container d-flex justify-content-between gap-5 my-5">
        <p><strong>Page: {page}</strong></p>
        <div className="d-flex justify-content-between gap-1">
        <button onClick={prev} className="btn btn-primary btn-sm">Prev</button>
        <button onClick={next} className="btn btn-primary btn-sm">Next</button>
        </div>
    </div>
  )
}

export default Pagination