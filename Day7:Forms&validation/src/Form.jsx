import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, formState : {errors}} = useForm();

  function sumbitForm(data){
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(sumbitForm)}>
        <div>
          <label htmlFor="first">Name</label>
          <input id="first" {...register("name",
          {required:"Name can't be empty"}
          )} />
          {errors.name && <span>{errors.name.message}</span> }
        </div>
        <div>
          <label htmlFor="second">age</label>
          <input id="second" {...register("age",
            { min : {
              value:10,
              message: "Minimum age should be 10",
            },
            max:{
              value:80,
              message:"Maximum age should be 80",
            }

            }
          )} />
          {errors.age && <span>{errors.age.message}</span> }
        </div>
        <div>
          <label htmlFor="third">pass</label>
          <input id="third" {...register("password")} />
        </div>
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;
