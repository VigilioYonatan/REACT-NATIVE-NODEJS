export async function zodValidator(schema: any, datos: any) {
    const data = await schema.safeParseAsync(datos);

    if (!data.success) {
        console.log({
            success: false,
            message: data.error.issues[0].message,
            param: data.error.issues[0].path[0],
        });

        return {
            success: false,
            message: data.error.issues[0].message,
            param: data.error.issues[0].path[0],
        };
    }
    return {
        success: true,
        data: datos,
    };
}
