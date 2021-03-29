const Field = ({ legend, itype, type, value, onChange, name }) => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          {legend}
        </label>
        <input
          type={itype ?? ""}
          class="form-control"
          value={value}
          id="exampleFormControlInput1"
          onChange={(e) => onChange(e, type, name)}
        />
      </div>
    </>
  )
}

export default Field
