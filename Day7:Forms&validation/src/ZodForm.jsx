import { useForm } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3,'Minimum length should be 3').max(20,"Maximum length should be 20"),
  age: z.coerce.number().min(10,"minimum age should be 10").max(80,"Maximum age should be 80"),
  password: z.string().min(5,"minimum pass should be 5").max(20,"Maximum age should be 20"),
  confirm: z.string(),
  email: z.email("Email is Invalid")
}).refine((data) => data.password === data.confirm, {
  message:"Password don't match",
  path: ['confirm'],//path of error
})

function ZodForm() {
  const { register, handleSubmit, formState : {errors}} = useForm({
    resolver: zodResolver(formSchema)
  });

  function sumbitForm(data){
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(sumbitForm)}>
        <div>
          <label htmlFor="first">Name</label>
          <input id="first" {...register("name",)} />
          {errors.name && <span>{errors.name.message}</span> }
        </div>
        <div>
          <label htmlFor="fourth">Email</label>
          <input id="fourth" {...register("email",)} />
          {errors.email && <span>{errors.email.message}</span> }
        </div>
        <div>
          <label htmlFor="second">age</label>
          <input type="number" id="second" {...register("age")} />
          {errors.age && <span>{errors.age.message}</span> }
        </div>
        <div>
          <label htmlFor="third">pass</label>
          <input type="password" id="third" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span> }
        </div>
        <div>
          <label htmlFor="fifth">conpass</label>
          <input type="password" id="fifth" {...register("confirm")} />
          {errors.confirm && <span>{errors.confirm.message}</span> }
        </div>
        <button>submit</button>
      </form>
    </>
  );
}

export default ZodForm;
